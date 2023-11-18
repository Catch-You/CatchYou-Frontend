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
    name: '홍길동',
    imgSrc: 'https://blogpfthumb-phinf.pstatic.net/MjAyMzA4MTVfMjgx/MDAxNjkyMDM0MjE3MzQ4._BVCNU9m5pBQ6jQzxHRkRwNtiuKck6RwevKeji6AcmMg.mCqu36OBQR7mHkS4uKd7_9hFOCo7JqkwpPWiFICjhucg.JPEG.myday0827/IMG_0137.jpg/IMG_0137.jpg?type=w161',
    id: 1
  },
};