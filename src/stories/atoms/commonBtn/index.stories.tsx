import type { Meta, StoryObj } from '@storybook/react';
import  CommonBtn  from '.';

const meta: Meta<typeof CommonBtn> = {
  title: 'atoms/CommonBtn',
  component: CommonBtn,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CommonBtn>;

export const Primary: Story = {
  args: {
    text: "수정하기"
  },
};