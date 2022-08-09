import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Input} from "../Input";

export default {
  title: "Example/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
  variant: "small",
  children: "My text",
};

export const Large = Template.bind({});
Large.args = {
  variant: "large",
  children: "My text",
};
