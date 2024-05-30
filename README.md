# Online Store

This project is an online store built with Express.js, Pug for views, and SQL for data storage. It includes user registration, login, and logout functionality.

## Project Structure

The project has the following structure:

```
online-store
├── src
│   ├── app.js
│   ├── routes
│   │   ├── index.js
│   │   ├── users.js
│   │   └── products.js
│   ├── views
│   │   ├── index.pug
│   │   ├── login.pug
│   │   ├── register.pug
│   │   └── layout.pug
│   ├── models
│   │   ├── user.js
│   │   └── product.js
│   └── controllers
│       ├── userController.js
│       └── productController.js
├── package.json
├── .env
└── README.md
```

## Setup

To run this project, you need to have Node.js and npm installed. Follow these steps:

1. Clone the repository.
2. Install the dependencies with `npm install`.
3. Set up your SQL database and add the connection string to the `.env` file.
4. Run the server with `npm start`.

## Features

- User registration, login, and logout.
- Product listing and detail views.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.