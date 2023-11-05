import type { Meta, StoryObj } from '@storybook/react';
import Longfield from '.';

const meta: Meta<typeof Longfield> = {
  title: 'molecules/Longfield',
  component: Longfield,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Longfield>;

export const Primary: Story = {
  args: {
    label: '이메일',
    placeholder: '대소문자 구분 없이 6자 이상, 특수문자 포함',
  },
};