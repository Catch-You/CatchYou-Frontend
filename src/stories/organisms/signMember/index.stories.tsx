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
    title: '목격자',
    subtitle: '일반 시민, 참고인 권한',
    police: false
  },
};     