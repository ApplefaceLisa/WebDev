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

#### Coding steps from user-service-1 to user-service-2
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
  c) use postman test. GET/POST...
