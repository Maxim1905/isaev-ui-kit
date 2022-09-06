import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components/Button";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  variant: "small",
  children: "NEW TEEXT",
};

export const Large = Template.bind({});
Large.args = {
  variant: "large",
  children: "всё нормально без билда на слиенте",
};
