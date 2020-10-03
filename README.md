# MERN-Online Shopping Platform

**Task:** To design responsive Ecommerce client containing product pages, shopping carts, different homepages with product presentations and many more.  

## Overview
### Technologies

For frontend, we will mainly work upon [React](https://reactjs.org/docs/getting-started.html) for components along with [Sass](https://sass-lang.com/documentation) and some other frontend and UI libraries.

### Learning Outcomes
* This project will take a bit of layout planning, so you will need some time, in the beginning, to think it through.
* This project presents some nice layout challenges. It's a great opportunity to practice Flexbox or CSS Grid.
* View the optimal layout for the component depending on their device's screen size. So, scaling the content down to mobile without it looking too squashed will be a challenge as well.
* You'll learn how to do basic form validation on client side. So the main learning outcome here will be how to write reusable JavaScript code to check the validity of the different form fields.
* Learning a pre-processor, like Sass, to help keep your code maintainable.
### Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| Yes | Yes| Yes| Yes| Yes| Yes

## Quick Start
### What's included

The project structure is predefined and is in sync with backend. We will mainly work to improve the UI of the platform and we will also include some other cool features if time permits.

```bash
.
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── README.md
├── src
│   ├── admin
│   │   ├── AddCategory.js
│   │   ├── AddProduct.js
│   │   ├── apiAdmin.js
│   │   ├── ManageProducts.js
│   │   ├── Orders.js
│   │   ├── updateCategory.js
│   │   └── UpdateProduct.js
│   ├── auth
│   │   ├── AdminRoute.js
│   │   ├── index.js
│   │   └── PrivateRoute.js
│   ├── config.js
│   ├── core
│   │   ├── apiCore.js
│   │   ├── Card.js
│   │   ├── cartHelpers.js
│   │   ├── Cart.js
│   │   ├── Checkbox.js
│   │   ├── Checkout.js
│   │   ├── fixedPrices.js
│   │   ├── Home.js
│   │   ├── Layout.js
│   │   ├── Menu.js
│   │   ├── Product.js
│   │   ├── RadioBox.js
│   │   ├── Search.js
│   │   ├── Shop.js
│   │   └── ShowImage.js
│   ├── index.js
│   ├── Routes.js
│   ├── styles.css
│   └── user
│       ├── AdminDashboard.js
│       ├── apiUser.js
│       ├── Profile.js
│       ├── Signin.js
│       ├── Signup.js
│       └── UserDashboard.js
└── yarn.lock
```
### Build

**PS:** Go through installation of Server code before setting up this repository [Server](https://github.com/milekag01/react-node-ecommerce).


To clone and run this project, you'll need Git and Node.js (which comes with npm) installed on your computer. From your command line:

```code
# clone this repository
$ git clone https://github.com/milekag01/react-node-ecommerce-client.git

# Go into the repository
cd react-node-ecommerce-client

# Install dependencies
npm install

# Start
npm run start
```
<!--% Admin Credentials  -->

For Admin Login credentials:

**Id:** milek@gmail.com

**Password:** qwerty123

For Placing the order, use Test Card Details:

**Card no.:** 4012000077777777

**Date**: Any
