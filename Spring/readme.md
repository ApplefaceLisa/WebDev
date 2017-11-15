# Resources
## Official Documentations
- [Spring Framework Reference Documentation](https://docs.spring.io/spring/docs/4.3.13.BUILD-SNAPSHOT/spring-framework-reference/htmlsingle/)
- [Spring Guides](https://spring.io/guides)

### Spring Getting Started
- [Building Java Projects with Maven](https://spring.io/guides/gs/maven/)
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
  
- [Working a Getting Started guide with STS](https://spring.io/guides/gs/sts/)  

  How to use Spring Tool Suite (STS) to build one of the Getting Started guides. You’ll pick a Spring guide and import it into Spring Tool Suite. Then you can read the guide, work on the code, and run the project.
  
- [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)

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
  
- [Accessing data with MySQL](https://spring.io/guides/gs/accessing-data-mysql/)

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
  
- [Testing the Web Layer](https://spring.io/guides/gs/testing-web/)  

  You’ll build a simple Spring application and test it with JUnit. You'll test just the web layer using Spring’s `MockMvc`.


## Video Tutorials
- Lynda [Spring: Framework In Depth](https://www.lynda.com/Spring-Framework-tutorials/Spring-Framework-Depth/606088-2.html)
- Java brain [Spring Boot Quick Start](https://javabrains.io/courses/spring_bootquickstart/)
- youTube [Spring Data JPA with Hibernate using MySql Example](https://www.youtube.com/watch?v=OhgJmZEva7A)

## Book
- Spring Microservices in Action

## Articles
- [microservices](https://www.microservices.com/)
- [A typical microservices architecture](https://www.microservices.com/reference-architecture/)
