import type { Meta, StoryObj } from '@storybook/react';
import TranslateBtn  from '.';

const meta: Meta<typeof TranslateBtn> = {
  title: 'atoms/TranslateBtn',
  component: TranslateBtn,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TranslateBtn>;

export const Primary: Story = {
  args: {
  },
};