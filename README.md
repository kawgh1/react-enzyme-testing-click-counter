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

    -   then **npm run build** to make a production build
    -   then **serve -s build**
    -   If you inspect the components or elements you will see that "data-test" properties have been removed from the production build - **NOTE**: This appears to work only on Chrome, the data-test attributes still appear on inspect in Mozilla

# Strategies and Design Decisions

-   DRY = Dont Repeat Yourself
-   Goals for test code are _NOT_ the same as for production code
-   Want failing tests to be easy to diagnose
-   Sometimes this means repeating code
-   Balance between DRY and not repeating your tests

# Use only one expect statement per test

-   Obviously matter of preference and there are cases where its ok, but the more expect statements per single test the more assumptions you are making that the tester understands the code base well and there are not multiple dependencies, functions, variables for each of the expect statements.
-   Test descriptions provide better documentation
-   Failure counts give better indication of state of code
    -   **Tests stop at first failure**
        -   There is no way to know up front if your test with 10 expect statements is failing on the first expect or the last expect - in an ongoing development environment this test could quickly get out of spec and perhaps even derail development if the tests were ignored for critical dependencies
-   Can use `beforeEach()` for common setup code to be run before each test

# Testing this Application

-   Test text is actually displayed on the page
    -   Text displayed, not State
    -   Testing behavior, not implementation
-   The plan: counter value will be in a <span>
    -   data-test attribute "count"
    -   Test that value is initially 0
-   use Enzyme `.text()` method

    -   used to text what the value is in the span that contains our count

-   ## Don't `find` too early

    -   Elements are unreliable after wrapper has changed
    -   Do this:

            const button = findByTestAttr(wrapper, "increment-button");
            button.simulate("click");

            const count = findByTestAttr(wrapper, "count").text();
            expect(count).toBe("1");

    -   **NOT** this:

            const button = findByTestAttr(wrapper, "increment-button");
            button.simulate("click");

            button.simulate('click');
            expect(count).toBe("1");

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
