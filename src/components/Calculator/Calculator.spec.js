import React, { Component } from "react";
import { shallow } from "enzyme";
import Calculator from "./Calculator";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";

describe("CalculatorComponent", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Calculator />)));

  it("should render a <div />", () => {
    const wrapper = shallow(<Calculator />);
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the Display Component", () => {
    expect(wrapper.containsMatchingElement(<Display />)).toEqual(true);
  });

  it("should render the Display Component with Display Value", () => {
    expect(
      wrapper.containsMatchingElement(
        <Display displayValue={wrapper.instance().state.displayValue} />
      )
    ).toEqual(true);
  });

  it("should render the Keypad Component", () => {
    expect(wrapper.containsMatchingElement(<Keypad />)).toEqual(true);
  });
});
