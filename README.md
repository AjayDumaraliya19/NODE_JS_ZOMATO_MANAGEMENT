# NODE_JS_ZOMATO_MANAGEMENT

<br/>
<p align="center">
    <h3 align="center">Zomato Database</h3>

  <p align="center">
    🍽️🥢🍚 Zomato-like Backend in Node.js 🚀 A powerful Node.js backend for a restaurant delivery platform, enabling efficient order management, user authentication, and real-time tracking. Elevate your restaurant app with this robust backend solution.
    <br/>
    <br/>
    <a href="https://github.com/AjayDumaraliya19/NODE_JS_ZOMATO_MANAGEMENT"><strong>Explore the docs »</strong></a>
  </p>
</p>

## Table Of Contents

- [About the Project](#about-the-project)
- [Built With](#built-with)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
- [Authors](#authors)

## About The Project

![Screen Shot](images/project.png)

Our Zomato-like Food Delivery App is a web-based platform designed to streamline the process of ordering and delivering food from various restaurants to customers' doorsteps. Built using Node.js, Express.js, and MongoDB, this application offers a seamless user experience with features like user authentication, restaurant listings, order management, and more.

Key Features:

1. User Authentication:
Users can create accounts, log in, and securely manage their profiles. Authentication is implemented using JWT tokens for enhanced security.

2. Restaurant Listings:
The app provides a comprehensive list of restaurants, each showcasing its cuisine, menu, location, and customer ratings. Users can easily browse through and select their preferred restaurants.

3. Menu and Ordering:
Users can view the menu of selected restaurants, add items to their cart, and place orders. They can customize their orders with special instructions or preferences.

4. Order Tracking:
Customers can track the status of their orders in real-time. They receive notifications about order confirmation, preparation, and delivery updates.

5. File Uploads (Restaurant Images):
Restaurants can upload images to showcase their ambiance, interiors, or signature dishes, enhancing the visual appeal of their profiles.

6. Admin Dashboard:
An admin dashboard provides access to manage users, restaurants, and orders. Admins have the authority to add new restaurants, monitor orders, and resolve disputes.

7. Multi-level Authentication:
The app implements user and admin authentication, ensuring that only authorized individuals can access sensitive information and perform critical actions.

8. Secure Payment Integration:
To facilitate seamless transactions, the app integrates with a secure payment gateway, allowing users to pay for their orders online.

9. Ratings and Reviews:
Users can leave reviews and ratings for restaurants, providing valuable feedback to both the restaurant owners and potential customers.

10. Search and Filter Functionality:
Users can search for specific cuisines, restaurants, or dishes, and apply filters based on location, ratings, and price range.

## Built With

In this project built with NodeJs, expressJs, and using Mongodb database for the data management. Token verification using Jsonwebtoken authentication. here dependencies used in project...

### Dependencies

- Express.js: "^4.18.2"
- Mongoose: "^7.5.3"
- Bcryptjs: "^2.4.3"
- Jsonwebtoken: "^9.0.2"
- Cors: "^2.8.5"
- Dotenv: "^16.3.1"
- Joi: "^17.10.2"
- Moment: "^2.29.4"
- Nodemon: "^3.0.1"
- Body-parser: "^1.20.2"


## Project Structure

- zomato-backend
  - src
    - config
    - controllers
    - db
    - helpers
    - middlewares
    - models
    - routes
      - v1
    - services
    - validations
    - index.js
  - .gitignore
  - .nvmrc
  - README.md
  - package.json

* These are the main collection you’ll need to create a functional delivery app. You may also need to create additional collection to store other information, such as information about promotions, discounts, and other types of deals. But initially let’s consider only these collection.

## Features

- User Authentication
- Restaurant Management
- Order Handling
- Real-time Tracking
- Review and Rating System

## Getting Started

### Prerequisites

This is an example of how to list things you need to use the project and how to install them.

- npm

```sh
npm install -g
```

### Installation

1. Clone the repository.

2. Install dependencies using "npm install".

3. Set up your MongoDB URI and JWT secret in "config.js".

```sh
git clone https://github.com/AjayDumaraliya19/NODE_JS_ZOMATO_MANAGEMENT
```

3. Install NPM packages

```sh
npm install
```
## Contributing

- Contributions are welcome! Please open an issue or submit a pull request.
- Let’s design the database for a food delivery app like Zomato.


### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Authors

- **AjayDumaraliya** - _Full stack developer Student_ - [Ajay Dumaraliya](https://github.com/AjayDumaraliya19) - _Built this project_
