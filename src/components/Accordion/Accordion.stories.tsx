import type { Meta, StoryObj } from '@storybook/react';
import { data } from '../../constant';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items: data,
  },
};

export const SingleItem: Story = {
  args: {
    items: [data[0]],
  },
};

export const MultipleItems: Story = {
  args: {
    items: data,
  },
};
