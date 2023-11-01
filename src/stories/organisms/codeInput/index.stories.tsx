import type { Meta, StoryObj } from '@storybook/react';
import  CodeInput  from '.';

const meta: Meta<typeof CodeInput> = {
  title: 'organisms/CodeInput',
  component: CodeInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CodeInput>;

export const Primary: Story = {
  args: {
  },
};     