import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

// set up Enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

// setup function
const setup = () => shallow(<App />);

// helper function used by multiple tests - easier to read
const findByTestAttr = (wrapper, value) =>
    wrapper.find(`[data-test='${value}']`);

test("renders without error", () => {
    // enzyme syntax

    // const wrapper = shallow(<App />);
    // const appComponent = wrapper.find("[data-test='component-app']");
    // expect(appComponent.length).toBe(1);

    // same as

    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "increment-button");
    expect(button.length).toBe(1);
});

test("renders counter display", () => {
    const wrapper = setup();
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(counterDisplay.length).toBe(1);
});

test("counter display starts at 0", () => {
    const wrapper = setup();
    // .text() always returns a string, so you need your expect statement to expect a string, not a number
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("0");
});

test("clicking button increments counter", () => {
    const wrapper = setup();

    // find the button
    const button = findByTestAttr(wrapper, "increment-button");

    // click the button
    button.simulate("click");

    // find the display, test that the number has incremented as expected
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("1");
});

//
//
//
//
//
//
///
//
//
//
//
//
//
//
//
//
//
//
//  JS DOC NOTATION

//  /**
//   * Factory function to create a ShallowWrapper for the App component.
//   * @function setup
//   * @param {object} props - Component props specific to this setup.
//   * @returns {ShallowWrapper}
//   */
//  const setup = (props={}) => {
//   return shallow(<App { ...props }/>)
// }

// /**
//  * Return ShallowWrapper containing node(s) with the given data-test value.
//  * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
//  * @param {string} val - Value of data-test c1scoL0ve!
//  *
//  */
// const findByTestAttr = (wrapper, val) => {
//   return wrapper.find(`[data-test="${val}"]`);
// }

// test('renders without error', () => {
//   const wrapper = setup();
//   const appComponent = findByTestAttr(wrapper, 'component-app');
//   expect(appComponent.length).toBe(1);
// });

// test('renders increment button', () => {
//   const wrapper = setup();
//   const button = findByTestAttr(wrapper, 'increment-button');
//   expect(button.length).toBe(1);
// });

// test('renders counter display', () => {
//   const wrapper = setup();
//   const counterDisplay = findByTestAttr(wrapper, 'counter-display');
//   expect(counterDisplay.length).toBe(1);
// });

// test('counter starts at 0', () => {
//   const wrapper = setup();
//   const count = findByTestAttr(wrapper, 'count').text();
//   expect(count).toBe("0");  // do this first with an integer and show failure!
// });

// test('counter increments when button is clicked', () => {
//   const wrapper = setup();

//   // find button and click
//   const button = findByTestAttr(wrapper, 'increment-button');
//   button.simulate('click');

//   // check the counter
//   const count = findByTestAttr(wrapper, 'count').text();
//   expect(count).toBe("1");
// });
