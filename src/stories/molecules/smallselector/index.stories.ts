import type { Meta, StoryObj } from '@storybook/react';
import  SmallSelector  from '.';

const meta: Meta<typeof SmallSelector> = {
  title: 'molecules/SmallSelector',
  component: SmallSelector,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SmallSelector>;

export const Primary: Story = {
  args: {
    text: "사건 공개범위를 선택하세요.",
    options: ["비공개", "공개"],
  },
};