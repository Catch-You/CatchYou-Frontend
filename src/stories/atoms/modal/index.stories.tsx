import type { Meta, StoryObj } from '@storybook/react';
import  Modal  from '.';

const meta: Meta<typeof Modal> = {
  title: 'atoms/Modal',
  component: Modal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    text: "인증 코드를 입력하세요.",
    input: true,
  },
};