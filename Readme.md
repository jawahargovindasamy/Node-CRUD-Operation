# Node CRUD API

This is the readme file for the Node CRUD API project.
This project is a Node.js CRUD (Create, Read, Update, Delete) API built with Express.js. It provides a simple API to manage a list of products. The API includes endpoints to create, retrieve, update, and delete products.

## Description
The Node CRUD API is a simple API built with Express.js that provides endpoints to manage a list of products. The API includes endpoints to create, retrieve, update, and delete products.


## Usage

To start the server, run:

```bash
npm start
```

For development mode with live reloading, use:

```bash
npm run dev
```

The server will start on the port specified in the `.env` file or default to `4000`.

## API Endpoints

### Products

- **Get All Products**

  - **URL:** `/api/products/getdata`
  - **Method:** `GET`
  - **Description:** Retrieve a list of all products.

- **Get Product By ID**

  - **URL:** `/api/products/getdata/:id`
  - **Method:** `GET`
  - **Description:** Retrieve a product by its ID.

- **Create Product**

  - **URL:** `/api/products/create`
  - **Method:** `POST`
  - **Description:** Create a new product.
  - **Body Parameters:**
    - `name` (string): Name of the product.
    - `price` (number): Price of the product.

- **Update Product**

  - **URL:** `/api/products/update/:id`
  - **Method:** `PUT`
  - **Description:** Update an existing product by ID.
  - **Body Parameters:**
    - `name` (string): Updated name of the product.
    - `price` (number): Updated price of the product.

- **Delete Product**

  - **URL:** `/api/products/delete/:id`
  - **Method:** `DELETE`
  - **Description:** Delete a product by ID.

## Environment Variables

- `PORT`: The port on which the server will run. Default is `4000`.

## Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `cors`: Middleware to enable CORS (Cross-Origin Resource Sharing).
- `dotenv`: Module to load environment variables from a `.env` file.
- `nodemon`: Tool for automatically restarting the node application when file changes in the directory are detected (for development).

## Postman Documentation

You can find the postman documentation for this API [here](https://documenter.getpostman.com/view/37421127/2sB2qdhfYQ).

The documentation includes the endpoints, request/response formats and sample requests/responses