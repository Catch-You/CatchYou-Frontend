import type { Meta, StoryObj } from '@storybook/react';
import Shortfield from '.';

const meta: Meta<typeof Shortfield> = {
  title: 'molecules/Shortfield',
  component: Shortfield,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Shortfield>;

export const Primary: Story = {
  args: {
    label: '코드입력',
    placeholder: '0000'
  },
};