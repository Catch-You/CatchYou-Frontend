import type { Meta, StoryObj } from '@storybook/react';
import Category from "./Category";

const meta: Meta<typeof Category> = {
  title: 'atoms/Category',
  component: Category,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Category>;

export const Primary: Story = {
  args: {
  },
};