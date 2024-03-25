# Express User Authentication Template

## Overview

This is a simple Express.js template that includes a User model and handles user authentication and encryption.

## Features

-   User Model: A basic user model using Mongoose.
-   Authentication: User authentication
-   Encryption: Password encryption using bcrypt.

## Getting Started

### Prerequisites

-   Node.js
-   MongoDB

### Installation

1. Clone the repository

git clone https://github.com/stan-breaks/express-template.git

2. Install NPM packages

npm install

3. Enter your MongoDB URI in `database/index.js`

```js
mongoose
  .connect("mongodb://localhost:27017/******")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));
```
Usage
Start the server:
```bash
npm run dev
```
Now, you can register and login users through the auth/register and auth/login routes respectively.

Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
```
