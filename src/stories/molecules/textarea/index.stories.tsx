import type { Meta, StoryObj } from '@storybook/react';
import TextArea from '.';

const meta: Meta<typeof TextArea> = {
  title: 'molecules/TextArea',
  component: TextArea,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Primary: Story = {
  args: {
    text: "인상 착의를 설명하세요.",
    placeholder: "20대 중반~30대 초반 남자, 178 가량. 건장한 체격. 상의 흰색 와이셔츠, 검은색 모자를 눌러씀, 구두 착용",
    rows: 4,
    maxInput: 350,
  },
};