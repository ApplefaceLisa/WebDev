# TBTF bank example code used for course.
1. Basic spring boot projects: user-service-1 and checking-account-service-1.
2. Add JPA/MySQL projects: user-service-2, checking-account-service-2, tbtf-mysql-schema, common-error(error code and exception handle).
3. Add Eureka config and discovery: user-service-3, checking-account-service-3, tbtf-sample-props-master(must stored in git), eureka-service, config-service.

# Code Dev and Use Flow
## Basic Sprint Boot Project
You can use [SPRING INITIALIZR](https://start.spring.io/) to create boilerplate of your basic spring project code. All selected/specified dependencies will be added in pom.xml file.

First example see code: https://github.com/rahulaga/hello-spring-boot, load page in browser http://localhost:8080/hello.

Three ways to run this app:
- Run in STS
- On command line : > mvn spring-boot:run
- Run fat jar (on command line)
  - build app to jar : > mvn clean package
  - run jar : > java -jar <path_to_jar_file>.jar

## 
