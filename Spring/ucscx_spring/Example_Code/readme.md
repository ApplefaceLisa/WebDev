# TBTF bank example code used for course.
1. Basic spring boot projects: user-service-1 and checking-account-service-1.
2. Add JPA/MySQL projects: user-service-2, checking-account-service-2, tbtf-mysql-schema, common-error(error code and exception handle).
3. Add Eureka config and discovery: user-service-3, checking-account-service-3, tbtf-sample-props-master(must stored in git), eureka-service, config-service.

# Code Dev and Use Flow
## Basic Sprint Boot Project
You can use [SPRING INITIALIZR](https://start.spring.io/) to create boilerplate of your basic spring project code. All selected/specified dependencies will be added in pom.xml file.

First example see code: https://github.com/rahulaga/hello-spring-boot, load page in browser http://localhost:8080/hello.

Three ways to start the Spring Boot app:
- Run in STS
- On command line : > mvn spring-boot:run
- Run fat jar (on command line)
  - build app to jar : > mvn clean package
  - run jar : > java -jar <path_to_jar_file>.jar

_**TBTF code**_: user-service-1 and checking-account-service-1

## Java Persistence, Hibernate and Spring data
### Introduction
- JPA : 

  The Java Persistence Architecture API (JPA) is a Java _**specification**_ for accessing, persisting, and managing
data between Java objects/classes and a relational database. JPA is just a set of interfaces, and requires an implementation.

- Hibernate : 

  Hibernate is one implementation of JPA and a very popular choice. Hibernate takes care of the mapping from Java classes to database tables and also provides data query and retrieval facilities. It can significantly reduce development time otherwise spent with manual data
handling in SQL and JDBC.

- Spring Data

  The spring-data provides a Spring wrapper over Hibernate and provide transaction management. It also provides a wrapper over other DBs like Mongo, Redis etc. Spring Data provides:

  - Standard Crud Repository
  - Paging/Sorting support
  - Custom Finder method - converted to SQL – based on method name
  
### Integrate DB into your services
- user-serivce-2 : Using JPA annotations and Spring JDBC template (Repository/DAO).
- checking-account-service-2 : Using external service (RestTemplate).

#### Coding steps from XXX-service-1 to XXX-service-2
1. In _**pom.xml**_ file, add JPA/mysql-connector dependencies  
```
  <dependency>
	  <groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-data-jpa</artifactId>
	</dependency>

	<dependency>
		<groupId>mysql</groupId>
		<artifactId>mysql-connector-java</artifactId>
	</dependency>
```

2. in _**UserServiceApplication.java**_ file, add tomcat  
```
  @Bean
    public EmbeddedServletContainerFactory servletContainerFactory(){
      TomcatEmbeddedServletContainerFactory tomcat = new TomcatEmbeddedServletContainerFactory();
      LogbackValve logbackValve = new LogbackValve();
      logbackValve.setFilename("logback-access.xml");
      tomcat.addContextValves(logbackValve);
      return tomcat;
    }
```

3. In _**UserImpl.java**_, add @Entity, @Table and @Column. To generate MySQL table.  
```
  @Entity
  @Table(name = "users")
  public class UserImpl implements User {
    @Id
    @Column(name = "idusers")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "pin")
    private String pin;

    ...
  }  
```

4. Add _**UserRepository.java**_ file.  
```
  import org.springframework.data.repository.CrudRepository;
  public interface UserRepository extends CrudRepository<UserImpl, Long> {
    // define query functions according to usage, not neccessarlily same as the following ones.
    Iterable<UserImpl> findByFirstNameContainingAndLastNameContaining(String firstName, String lastName);
    Iterable<UserImpl> findByFirstNameContaining(String firstName);
    Iterable<UserImpl> findByLastNameContaining(String firstName);
  } 
```

5. In _**UserServiceImpl.java**_, wire UserRepository.  
```
  @Service
  public class UserServiceImpl implements UserService {
    private Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    private UserRepository userRepository;
    ...
  }
```

6. Create Model and Table using MySQL workbench  
  [create a MySQL connection](https://dev.mysql.com/doc/workbench/en/wb-getting-started-tutorial-create-connection.html) before doing the following.  
  a) create model : "File"->"New Model".  
  b) click "+" on the top-right of window, input schema name.  
  c) double-click "Add Table", input table name and column name/type/etc. Notice id name must start with "id".  
  d) generate EER diagram for model : "Model" -> "create diagram from catalog object". Then save model by click "File" -> "save model".  
  e) synchronize model : "Database" -> "Synchronize Model". ONLY need to do once.  
  f) add data into database : open MySQL connection, in "Navigator" -> "Schemas", select the database you want to modify. Select the table name and right click, select "Select rows - limit 1000". You will see the current content and modify it's contents.  
  
7. In _**application.properties**_ file, add mysql connection details.  
```
  #mysql connection details
  spring.datasource.url=jdbc:mysql://localhost/user-db 
  spring.datasource.username=root            
  spring.datasource.password=1234
  spring.datasource.driver-class-name=com.mysql.jdbc.Driver

  #log sql from hibernate
  spring.jpa.properties.hibernate.show_sql=true
  spring.jpa.properties.hibernate.format_sql=true
  spring.jpa.properties.hibernate.type=trace
```

8. run application  
  a) make sure server is running : MySQL workbench -> connection -> "Server" -> "Server status" / "Startup/Shutdown"
  b) in STS run app  
  c) use postman test. GET/POST...See "user-service2.postman_collection.json"

## Microservice discovery and configuration
- Discovery : services talk to each other. 
  - Code : eureka-service
- Externalized configuration : 
  - Code : config-service
  - [Sample properties](https://github.com/rahulaga/tbtf-sample-props) (MUST be a git repo)
### Coding steps from user-service-2 to user-service-3
1. In _**pom.xml**_ file, add eureka-server/cloud-config dependencies and dependency management.
```
  <dependencies>
    <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-starter-eureka-server</artifactId>
    </dependency>

    <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-starter-config</artifactId>
    </dependency> 
    ...
  </dependencies>

  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-dependencies</artifactId>
        <version>Camden.SR5</version>
        <type>pom</type>
        <scope>import</scope>
        </dependency>
      </dependencies>
  </dependencyManagement>
```

2. In _**UserServiceApplication.java**_, add @EnableEurekaClient
```
  @SpringBootApplication
  @EnableEurekaClient
  public class UserServiceApplication {
    ...
  }
```

3. Modify _**application.properties**_, move all properties except server.port to external .properties file.  
4. Modify _**bootstrap.properties**_, add uri of external .properties file. For example `spring.cloud.config.uri=http://localhost:8888`.  
5. Run application  
  a) run eureka-service. open localhost:9999 in browser to check if start successfully.  
  b) run config-service.  
  c) run user-service-3.  
  d) use postman do REST test.  

### Coding steps from checking-account-service-2 to checking-account-service-3
The main difference between checking-account-service-3 and user-service-3 is, checking-account-service-3 is dependent on user-service-3. The user info stored in user-service database and user id is stored in checking-account. Checking account and user info are correlated by userId <-> account-Id. When we want to add an checking account for a specific user, we need to first check if this user is already existed by starting a request for user-service from checking-account-service. Details see `addAccount()` in CheckingAccountServiceImpl.java and *.externalresource.
