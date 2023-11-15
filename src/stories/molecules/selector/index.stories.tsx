import type { Meta, StoryObj } from '@storybook/react';
import  Selector  from '.';

const meta: Meta<typeof Selector> = {
  title: 'molecules/Selector',
  component: Selector,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Selector>;

export const Primary: Story = {
  args: {
    text: "사건 공개범위를 선택하세요.",
    options: ["비공개", "공개"],
  },
};