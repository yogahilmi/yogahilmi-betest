# Microservices (Nodejs - Express)

## Heroku Deployment

Endpoint :
https://ms-yogahilmi-betest.herokuapp.com

## Specification

- NodeJS
- ExpressJS
- MongoDB
- JWT
- Redis

## Run the System

We can easily run the whole with only a single command:

```bash
docker-compose up
```

Docker will pull the MongoDB and Redis images (if our machine does not have it before).

The services can be run on the background with command:

```bash
docker-compose up -d
```

## Stop the System

Stopping all the running containers is also simple with a single command:

```bash
docker-compose down
```

If you need to stop and remove all containers, networks, and all images used by any service in <em>docker-compose.yml</em> file, use the command:

```bash
docker-compose down --rmi all
```

# API Documentation

## Auth /auth

**Register User**

> POST /auth/register

Body:

```
{
    "userName": "Yoga Hilmi Tasanah",
    "emailAddress": "yogahilmi@mail.com",
    "password": "12345678",
    "accountNumber" : 8180620006,
    "identityNumber" : 88181818
}
```

**Login User**

> POST /auth/login

Body:

```
{
    "emailAddress": "yogahilmi@mail.com",
    "password": "12345678"
}
```

## User /user/

**Get All Users**

> GET /user

Authorization: Bearer Token

**Get User By ID**

> GET /user/{id}

Authorization: Bearer Token

**Get User With Filter**

> GET /user

Authorization: Bearer Token

Optional Query Params:

```
accountNumber
identityNumber
```

**Update User**

> PATCH /user/{id}

Authorization: Bearer Token

Body:

```
{
    "userName": "Yoga Hilmi Tasanah",
    "emailAddress": "yogahilmi@mail.com",
    "password": "12345678",
    "accountNumber" : 8180620006,
    "identityNumber" : 88181818
}
```

**Delete User**

> DELETE /user/{id}

Authorization: Bearer Token
