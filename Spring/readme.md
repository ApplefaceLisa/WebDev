# Resources
## Official Documentations
### Maven
- [Maven Getting Started Guide](https://maven.apache.org/guides/getting-started/)
- [Maven Repository](https://mvnrepository.com/)
- [Maven Build Lifecycle](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html)

### Spring
#### [Spring Guides](https://spring.io/guides)

  seq | title | summary
  --- |----- | ---------------------------------------------------------------------------------------------------------------------
  1 | [Building Java Projects with Maven](https://spring.io/guides/gs/maven/) | Learn how to build a Java project with Maven.
  2 | [Building an Application with Spring Boot](https://spring.io/guides/gs/spring-boot/) | Learn how to build an application with minimal configuration.
  3 | [Working a Getting Started guide with STS](https://spring.io/guides/gs/sts/) | Learn how to import a Getting Started guide with Spring Tool Suite (STS).
  4 | [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/) | Learn how to create a RESTful web service with Spring.
  5 | [Building a RESTful Web Service with Spring Boot Actuator](https://spring.io/guides/gs/actuator-service/) | Learn how to create a RESTful Web service with Spring Boot Actuator.
  6 | [Building a Hypermedia-Driven RESTful Web Service](https://spring.io/guides/gs/rest-hateoas/) | Learn how to create a hypermedia-driven RESTful Web service with Spring.
  7 | [Accessing Data with JPA](https://spring.io/guides/gs/accessing-data-jpa/) | Learn how to work with JPA data persistence using Spring Data JPA.
  8 | [Accessing JPA Data with REST](https://spring.io/guides/gs/accessing-data-rest/) | Learn how to work with RESTful, hypermedia-based data persistence using Spring Data REST.
  9 | [Accessing Relational Data using JDBC with Spring](https://spring.io/guides/gs/relational-data-access/) | Learn how to access relational data with Spring.
  10 | [Accessing data with MySQL](https://spring.io/guides/gs/accessing-data-mysql/) | Learn how to set up and manage user accounts on MySQL and how to configure Spring Boot to connect to it at runtime.
  11 | [Testing the Web Layer](https://spring.io/guides/gs/testing-web/) | Learn how to test Spring Boot applications and MVC controllers.
  12 | [Centralized Configuration](https://spring.io/guides/gs/centralized-configuration/) | Learn how to manage application settings from an external, centralized source.
  13 | [Service Registration and Discovery](https://spring.io/guides/gs/service-registration-and-discovery/) | Learn how to register and find services with Eureka.
  14 | [Consuming a RESTful Web Service](https://spring.io/guides/gs/consuming-rest/) | Learn how to retrieve web page data with Spring's RestTemplate.
  15 | [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/) | Learn how to create a web page with Spring MVC.
  16 | [Consuming a RESTful Web Service with AngularJS](https://spring.io/guides/gs/consuming-rest-angularjs/) | Learn how to retrieve web page data with AngularJS.
  17 | [Enabling Cross Origin Requests for a RESTful Web Service](https://spring.io/guides/gs/rest-service-cors/) | Learn how to create a RESTful web service with Spring that support Cross-Origin Resource Sharing (CORS).

  
#### [Spring Framework Reference Documentation](https://docs.spring.io/spring/docs/4.3.13.BUILD-SNAPSHOT/spring-framework-reference/htmlsingle/)
#### [Spring Web MVC](https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html#mvc)
#### [Common application properties](https://docs.spring.io/spring-boot/docs/current/reference/html/common-application-properties.html)
#### [Spring Data repository](https://docs.spring.io/spring-data/data-commons/docs/1.6.1.RELEASE/reference/html/repositories.html)

### MySQL
#### Data Modeling
- [Data modelling - an introduction](https://www.youtube.com/watch?v=tR_rOJPiEXc)

#### Data Relationships
- [One-to-One Relationship](https://www.youtube.com/watch?v=lDnL1gwCE0o)
- [One-to-Many Relationship](https://www.youtube.com/watch?v=KjA2LhT4TRU)
- [Many-to-Many Relationship](https://www.youtube.com/watch?v=a-o0d_e9mW8)
- [Summary of Relationships](https://www.youtube.com/watch?v=N026kasOr4w)

- [Spring Boot JPA Many to Many Relationship Mapping Example](http://javabycode.com/spring-framework-tutorial/spring-boot-tutorial/spring-boot-jpa-many-to-many-relationship-mapping-example.html#comment-7644)

#### MySQL workbench
- [Server Configuration with MySQL Installer](https://dev.mysql.com/doc/mysql-installer/en/mysql-installer-workflow-server.html)
- [Connections in MySQL Workbench](https://dev.mysql.com/doc/workbench/en/wb-mysql-connections.html)
  - [Creating A New MySQL Connection (Tutorial)](https://dev.mysql.com/doc/workbench/en/wb-getting-started-tutorial-create-connection.html)
- [Modeling Tutorials](https://dev.mysql.com/doc/workbench/en/wb-tutorials.html)
  - [Creating a Model](https://dev.mysql.com/doc/workbench/en/wb-getting-started-tutorial-creating-a-model.html)
- Database Development [Adding Data](https://dev.mysql.com/doc/workbench/en/wb-getting-started-tutorial-adding-data.html)  
- [Database Design / Modeling](https://dev.mysql.com/doc/workbench/en/wb-data-modeling.html)

### Tools
- [bitbucket](https://bitbucket.org/) : the git solution
  - [Tutorial: Learn Git with Bitbucket Cloud](https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud)
- [JSON to XML Converter](https://www.freeformatter.com/json-to-xml-converter.html)
- [documentation Editor](https://editor.swagger.io/)

### Spring Getting Started
1. [Building Java Projects with Maven](https://spring.io/guides/gs/maven/)
  - To test the Maven installation, run mvn from the command-line : `mvn -v`
  - To create a Maven project definition in _**pom.xml**_. This file gives the project’s name, version, and dependencies that it has on external libraries. Main configurations :
    - `<modelVersion>` : POM model version (always 4.0.0).
    - `<groupId>` : Group or organization that the project belongs to. Often expressed as an inverted domain name.
    - `<artifactId>` : Name to be given to the project’s library artifact (for example, the name of its JAR or WAR file).
    - `<version>` : Version of the project that is being built.
    - `<packaging>` : How the project should be packaged. Defaults to "jar" for JAR file packaging. Use "war" for WAR file packaging.
    - `<dependencies>` : Dependencies info. Example:
      ```
      <dependencies>
        <dependency>
          <groupId>joda-time</groupId>
          <artifactId>joda-time</artifactId>
          <version>2.9.2</version>
        </dependency>
      </dependencies>
      ```
  - `mvn compile` : This will run Maven, telling it to execute the compile goal. When it’s finished, you should find the compiled _.class_ files in the target/classes directory.
  - `mvn package` : The package goal will compile your Java code, run any tests, and finish by packaging the code up in a JAR file within the target directory. The name of the JAR file will be based on the project’s <artifactId> and <version>.
  - `mvn install` : The install goal will compile, test, and package your project’s code and then copy it into the local dependency repository, ready for another project to reference it as a dependency.
  
2. [Working a Getting Started guide with STS](https://spring.io/guides/gs/sts/)  
  How to use Spring Tool Suite (STS) to build one of the Getting Started guides. You’ll pick a Spring guide and import it into Spring Tool Suite. Then you can read the guide, work on the code, and run the project.
  
3. [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)  
  In Spring's approach to building RESTful web services, HTTP requests are handled by a controller. These components are easily identified by the `@RestController` annotation.    
  Example code:  
  ```
    // src/main/java/hello/Greeting.java
    package hello;

    public class Greeting {

        private final long id;
        private final String content;

        public Greeting(long id, String content) {
            this.id = id;
            this.content = content;
        }

        public long getId() {
            return id;
        }

        public String getContent() {
            return content;
        }
    }  

    ---------------------------------------------------------------------------------------------------------
    // src/main/java/hello/GreetingController.java
    package hello;

    import java.util.concurrent.atomic.AtomicLong;
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.bind.annotation.RequestParam;
    import org.springframework.web.bind.annotation.RestController;

    @RestController
    public class GreetingController {

        private static final String template = "Hello, %s!";
        private final AtomicLong counter = new AtomicLong();

        @RequestMapping("/greeting")
        public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
            return new Greeting(counter.incrementAndGet(),
                                String.format(template, name));  
            // The object data will be written directly to the HTTP response as JSON.
        }
    }

    ---------------------------------------------------------------------------------------------------------
    // src/main/java/hello/Application.java
    package hello;

    import org.springframework.boot.SpringApplication;
    import org.springframework.boot.autoconfigure.SpringBootApplication;

    @SpringBootApplication
    public class Application {

        public static void main(String[] args) {
            SpringApplication.run(Application.class, args);
        }
    }  
  ```
  
  -  `@RestController` annotation, which marks the class as a controller where every method returns a domain object instead of a view. It’s shorthand for `@Controller` and `@ResponseBody` rolled together.
  - `@RequestMapping` annotation ensures that HTTP requests to `/greeting` are mapped to the `greeting()` method.
  - `@RequestParam` binds the value of the query string parameter `name` into the name parameter of the greeting() method. This query string parameter is explicitly marked as optional (required=true by default): if it is absent in the request, the `defaultValue of "World"` is used.
  
4. [Accessing data with MySQL](https://spring.io/guides/gs/accessing-data-mysql/)  
  You’ll create a MySQL database, build a Spring application and connect it with the newly created database. Steps :
  
  - pom.xml, dependencies : web, JPA, mySQL connector
  - Create the `application.properties` file (src/main/resources/application.properties). Example:
    ```
    spring.jpa.hibernate.ddl-auto=create
    spring.datasource.url=jdbc:mysql://localhost:3306/db_example
    spring.datasource.username=springuser
    spring.datasource.password=ThePassword  
    ```
  - Create the `@Entity` model. Example: This is the entity class which Hibernate will automatically translate into a table.
    ```
    package hello;

    import javax.persistence.Entity;
    import javax.persistence.GeneratedValue;
    import javax.persistence.GenerationType;
    import javax.persistence.Id;

    @Entity // This tells Hibernate to make a table out of this class
    public class User {
      @Id
      @GeneratedValue(strategy=GenerationType.AUTO)
      private Integer id;

      private String name;

      private String email;

      public Integer getId() {
        return id;
      }
      ......
    }    
    ```
  - Create the repository, example
    ```
    package hello;

    import org.springframework.data.repository.CrudRepository;

    import hello.User;

    // This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
    // CRUD refers Create, Read, Update, Delete

    public interface UserRepository extends CrudRepository<User, Long> {

    }    
    ```
  - Create a new controller for your Spring application. @RestController, @RequestMapping, etc.
  - Make the application executable. @SpringBootApplication
  - Build an executable JAR : `./mvnw spring-boot:run` or `./mvnw clean package`.
  - Run the JAR file, example : `java -jar target/gs-accessing-data-mysql-0.1.0.jar`.
  
5. [Testing the Web Layer](https://spring.io/guides/gs/testing-web/)  
  You’ll build a simple Spring application and test it with JUnit. You'll test just the web layer using Spring’s `MockMvc`.

6. [Service Registration and Discovery](https://spring.io/guides/gs/service-registration-and-discovery/)  
  You’ll setup a Netflix Eureka service registry and then build a client that both registers itself with the registry and uses it to resolve its own host.  
  A service registry is useful because it enables client-side load-balancing and decouples service providers from consumers without the need for DNS.

## Video Tutorials
- Lynda [Spring: Framework In Depth](https://www.lynda.com/Spring-Framework-tutorials/Spring-Framework-Depth/606088-2.html)
- Java brain [Spring Boot Quick Start](https://javabrains.io/courses/spring_bootquickstart/)
- youTube [Spring Data JPA with Hibernate using MySql Example](https://www.youtube.com/watch?v=OhgJmZEva7A)

## Book
- Spring Microservices in Action

## Articles
- [microservices](https://www.microservices.com/)
- [A typical microservices architecture](https://www.microservices.com/reference-architecture/)
