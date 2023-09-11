 # CRUD Operation API Documentation

 This documentation provides an overview of CRUD (Create, Read, Update, Delete) operations using a Person as an example.

 ## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [Create](#create)
  - [Read](#read)
  - [Update](#update)
  - [Delete](#delete)
- [Usage Examples](#usage-examples)

## Gettint Started

In software development, CRUD operations are fundamental actions used to manipulate data. CRUD stands for Create, Read, Update, and Delete. In this guide, we'll walk you through implementing these operations for a "Person" entity.

### Prerequisites

Before you begin, make sure you have the following requirements and dependencies: 
- Node.js
- MongoDB

### Installation

1. Clone the repository: 
    ```
    git clone https://github.com/danielopara/hngx-project2.git
    cd hngx-project2
    ```
2. In the project directory run these commands to install the dependencies and run the API:
    ```
    npm install
    npm start
    ```

## API Endpoints

### Create
- Endpoint `https://hngxproject2.onrender.com/api`
- Method: `POST`
- Description: Create a new person in the database
- Request Body: JSON data containing a value "name" and the name of the person.
- Response: Contains a message "Person saved successfully" and the person object that contains id and name.

### Read

1. 
- Endpoint `https://hngxproject2.onrender.com/api`
- Method: `GET`
- Description: This endpoint is for reading all the persons in the database.
- Response: JSON response with the resource data.

2. 
- Endpoint `https://hngxproject2.onrender.com/api/:_id`
- Method: `GET`
- Description: Retrieve details of a specific person by their id.
- Response: JSON response with the resource data.

### Update
- Endpoint `https://hngxproject2.onrender.com/api/:_id`
- Method: `PUT`
- Description: Update an existing person by its ID.