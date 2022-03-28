import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";
import { Heading } from "./Heading";

export default {
  title: "Components/HeadingWithIcon",
  component: Heading,
} as Meta;

const Template: Story<ComponentProps<typeof Heading>> = (args) => (
  <Heading {...args} />
);

export const H1 = Template.bind({});
H1.args = {
  level: 1,
  icon: "info",
  children: "Heading",
};

export const H2 = Template.bind({});
H2.args = {
  level: 2,
  icon: "info",
  children: "Heading",
};

export const H3 = Template.bind({});
H3.args = {
  level: 3,
  icon: "info",
  children: "Heading",
};

export const H4 = Template.bind({});
H4.args = {
  level: 4,
  icon: "info",
  children: "Heading",
};

export const H5 = Template.bind({});
H5.args = {
  level: 5,
  icon: "info",
  children: "Heading",
};

export const H6 = Template.bind({});
H6.args = {
  level: 6,
  icon: "info",
  children: "Heading",
};
