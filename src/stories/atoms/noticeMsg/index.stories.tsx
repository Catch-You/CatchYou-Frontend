import type { Meta, StoryObj } from '@storybook/react';
import NoticeMsg from '.';

const meta: Meta<typeof NoticeMsg> = {
  title: 'atoms/NoticeMsg',
  component: NoticeMsg,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NoticeMsg>;

export const Primary: Story = {
  args: {
    text: '코드가 인증되었습니다.',
    error: false,
  },
};