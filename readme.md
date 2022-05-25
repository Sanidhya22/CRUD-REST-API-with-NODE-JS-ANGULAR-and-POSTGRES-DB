## CRUD REST SERVICE WITH VALIDATION and POSTGRESQL AND LAYERED ARCHITECTURE



## Installation

```bash
  npm i express @hapi/joi cors generate-password pg pg-hstore sequelize uuid
```

## Download Postgres DB and Create DB name "CRUD-DB"

Create Table with below query

```bash
CREATE TABLE users (
    id uuid ,
    login VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    age int NOT NULL,
    isdeleted BOOLEAN,
    PRIMARY KEY (id)
);
```
## Deploy the Server

Run the following command 

```bash
  node app.js
```

## To test the service CRUD methods, you can use Postman (https://www.getpostman.com/).

#### Get user by id

```bash
  GET http://localhost:3000/items/id/dbcae21d-9bd1-4647-93c3-f53f4fd7b7e4
```

#### Get all users data

```bash
  GET http://localhost:3000/items/
```

#### Get auto-suggest list from limit users, sorted by login property and filtered by loginSubstring in the login property:
 

```bash
  GET http://localhost:3000/items/getASU?login=Dar&limit=3

#### Key ---- Value
##### login  ---- Dar
##### limit ----  3
````

#### Create User data 

```bash
  Post http://localhost:3000/items/

Send user data in Body tab and Select type JSON .
 
 {
        "login": "Darantee",
        "age": "20",
    }
```
#### Update User data

```bash
  Put http://localhost:3000/items/dbcae21d-9bd1-4647-93c3-f53f4fd7b7e4

  Here "dbcae21d-9bd1-4647-93c3-f53f4fd7b7e4" is the id of user whose data we want to updated.
  Send the updated data in body tab and select JSOn type.
   
   {
        "login": "Shanu",
        "age": "20"
    }

```

#### Delete operation will Mark idDeleted "True" in user data

```bash
  Delete http://localhost:3000/items/delete/dbcae21d-9bd1-4647-93c3-f53f4fd7b7e4
  
  Here "dbcae21d-9bd1-4647-93c3-f53f4fd7b7e4" is the id of user whose id we want to softdelete.
```

