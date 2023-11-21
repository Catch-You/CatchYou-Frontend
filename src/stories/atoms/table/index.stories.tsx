import type { Meta, StoryObj } from '@storybook/react';
import  Table  from '.';

const meta: Meta<typeof Table> = {
  title: 'atoms/Table',
  component: Table,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Primary: Story = {
  args: {
    title: ['사건번호', '공개여부', '몽타주'],
    data: [
      {
        no: '2023고단454',
        public: true,
        montage: 'https://sdfsdf//12234/23dsjfkdfsdf',
      },
      {
        no: '2013고단254',
        public: false,
        montage: 'https://sdfsdf//4234/11dsjfkd',
      },   
    ]
  },
};