import type { Meta, StoryObj } from '@storybook/react';
import  InfoCard  from '.';

const meta: Meta<typeof InfoCard> = {
  title: 'atoms/InfoCard',
  component: InfoCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InfoCard>;

export const Primary: Story = {
  args: {
  },
};