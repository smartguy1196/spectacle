import Progress from "./progress";
import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";

const _items = [ <div />, <div />, <div /> ];

describe("<Progress />", () => {
  test("should render PacMan correctly", () => {
    const context = { styles: { progress: { pacman: [] } } };
    const wrapper = mount((
      <Progress
        type="pacman"
        items={_items}
        currentSlide={2}
      />
    ), { context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  test("should render the number style correctly", () => {
    const context = { styles: { progress: { number: [] } } };
    const wrapper = mount((
      <Progress
        type="number"
        items={_items}
        currentSlide={1}
      />
    ), { context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  test("should render the bar style correctly", () => {
    const context = { styles: { progress: { bar: [] } } };
    const wrapper = mount((
      <Progress
        type="bar"
        items={_items}
        currentSlide={1}
      />
    ), { context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  test("should render nothing when none is provided.", () => {
    const context = { styles: { progress: {} } };
    const wrapper = mount((
      <Progress
        type="none"
        items={_items}
        currentSlide={3}
      />
    ), { context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});
