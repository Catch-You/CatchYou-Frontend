import type { Meta, StoryObj } from '@storybook/react';
import  SignMember  from '.';

const meta: Meta<typeof SignMember> = {
  title: 'organisms/SignMember',
  component: SignMember,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SignMember>;

export const Primary: Story = {
  args: {
    title: '몽타주 전문가',
    subtitle: '몽타주 제작 전문가',
    police: false
  },
};     