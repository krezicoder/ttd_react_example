import React, { Component } from "react";
import { shallow } from "enzyme";
import Calculator from "./Calculator";

describe("CalculatorComponent", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Calculator />)));

  it("should render a <div />", () => {
    const wrapper = shallow(<Calculator />);
    expect(wrapper.find("div").length).toEqual(1);
  });
});
