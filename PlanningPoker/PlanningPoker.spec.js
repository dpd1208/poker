import React from "react";
import { shallow } from "enzyme";
import PlanningPoker from "./SearchBar";
import {
  SearchIconOpen,
  SearchInput,
  SearchWrapper,
} from "./PlanningPoker.styled";

require("jest-styled-components");

describe("<SearchBar />", () => {
  it("should render Search Bar Component", () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find(SearchWrapper).length).toBe(1);
    expect(wrapper.find(SearchInput).length).toBe(1);
    expect(wrapper.find(SearchIconOpen).length).toBe(1);
  });
});
