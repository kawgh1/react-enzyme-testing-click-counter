# Click Counter

### A very basic app to demonstrate React TDD using Enzyme for testing

-   ## Install Enzyme and Enzyme adapter
    **npm install --save-dev enzyme @wojtekmaj/enzyme-adapter-react-17**

# data-test attributes

-   data-test attributes are used to test rendering
    -   top level element of a component
    -   it allows us to make sure the component we are testing is the same component that is rendering
    -   Why a new attribute? Why not **id** or **class**?
        -   **id** and **class** have uses in production app
        -   Might get changed in the future, generally dont want to tightly couple testing functionality with production attributes
        -   **data-test** attributes is **only** used in testing, has no other function or purpose
            -   This protects both testing and production environments by keeping them cleanly separated

## How to remove these data-test properties from production code

-   Most likely you dont want a bunch of testing attributes and code as part of your production code deployed

    -   https://www.npmjs.com/package/babel-plugin-react-remove-properties
    -   **npm install --save-dev babel-plugin-react-remove-properties**
    -   this plugin babel-plugin-react-remove-properties allows you to remove targeted properties and keywords from your production code prior to shipping
    -   # requires npm run eject
    -   We need to eject from CRA (create-react-app) to change the Babel settings
    -   Change package.json babel settings

              "babel": {
                  "env": {
                  "production": {
                    "plugins": [
                      ["react-remove-properties", {"properties": ["data-test"]}]
                    ]
                  }
                },
                  "presets": [
                    "react-app"
                  ]
                }

## Branches

-   `master`

This branch represents the project at the end of the instructional videos, without any of the challenges completed.

-   `click-counter-challenges`

    This branch contains solutions to the challenges. You can also find challenge solutions in the [SOLUTIONS for Click Counter Challenges](https://github.com/flyrightsister/udemy-react-testing-projects/tree/master/SOLUTIONS%20for%20Click%20Counter%20Challenges) folder.

## Challenges

#### 1. Decrement button

-   Create a new button that subtracts 1 from the counter
-   Add functionality that decrements the counter when the new button is clicked.

#### 2. No count below 0

-   Don't let the counter go below zero.
-   if the counter is at 0 and the decrement button is clicked:
    -   don't decrement the counter
    -   display an error message saying the counter can't go below zero

#### 3. Remove error when increment button is clicked

-   If error is showing and increment button is clicked, clear the error.

## Credits

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
