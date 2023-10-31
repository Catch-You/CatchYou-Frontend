import type { Meta, StoryObj } from '@storybook/react';
import  Title  from '.';

const meta: Meta<typeof Title> = {
  title: 'atoms/Title',
  component: Title,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Primary: Story = {
  args: {
    text: '로그인하기'
  },
};