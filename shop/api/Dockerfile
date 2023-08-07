FROM openjdk:17-alpine

EXPOSE 80

WORKDIR /app

COPY ./build/libs .

COPY ./build/resources/main .

ENTRYPOINT ["java","-jar","-Dspring.profiles.active=prod","shop-api-0.0.1-SNAPSHOT.jar"]

#ENTRYPOINT ["/bin/sh", "-c" , "pwd && ls"]