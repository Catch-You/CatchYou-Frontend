import type { Meta, StoryObj } from '@storybook/react';
import ErrorMsg from '.';

const meta: Meta<typeof ErrorMsg> = {
  title: 'atoms/ErrorMsg',
  component: ErrorMsg,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ErrorMsg>;

export const Primary: Story = {
  args: {
    text: '이메일 또는 비밀번호가 올바르지 않습니다.'
  },
};