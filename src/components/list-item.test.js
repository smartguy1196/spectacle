import ListItem from "./list-item";
import React from "react";
import { shallow } from "enzyme";

describe("<ListItem />", () => {
  it("creates a <li> with children as contents", () => {
    const content = "List Item Content";
    const context = { styles: { components: { listItem: {} } } };
    const wrapper = shallow(<ListItem>{content}</ListItem>, { context });
    expect(wrapper.text()).toBe(content);
    expect(wrapper.type()).toBe("li");
  });

  it("applies contextual styles to the rendered component", () => {
    const context = { styles: { components: { listItem: {
      background: "#fff",
      color: '#ff0'
    } } } };
    const wrapper = shallow(<ListItem>List Item Content</ListItem>, { context });
    expect(wrapper.prop("style")).toEqual(context.styles.components.listItem);
  });
});
