import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Pagination } from './Pagination';

// Define prop types for the wrapper
interface PaginationWithStateProps {
  totalPages: number;
  initialPage?: number;
  orientation?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  maxVisible?: number;
}

// Create a wrapper component that accepts args
const PaginationWithState: React.FC<PaginationWithStateProps> = ({
  totalPages,
  initialPage = 1,
  orientation,
  size,
  maxVisible
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(`Page changed to ${page}`);
  };

  return (
    <Pagination
      totalPages={totalPages}
      currentPage={currentPage}
      onPageChange={handlePageChange}
      orientation={orientation}
      size={size}
      maxVisible={maxVisible}
    />
  );
};

const meta = {
  title: 'Components/Pagination',
  component: PaginationWithState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    totalPages: { control: { type: 'number', min: 1, max: 50 } },
    initialPage: { control: { type: 'number', min: 1 } },
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical']
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    maxVisible: { control: { type: 'number', min: 1, max: 10 } },
  }
} satisfies Meta<typeof PaginationWithState>;

export default meta;
type Story = StoryObj<typeof PaginationWithState>;

export const Default: Story = {
  args: {
    totalPages: 10,
    initialPage: 1,
  },
};

export const CurrentPageMiddle: Story = {
  args: {
    totalPages: 10,
    initialPage: 5,
  },
};

export const Vertical: Story = {
  args: {
    totalPages: 10,
    initialPage: 1,
    orientation: "vertical",
  },
};

export const Small: Story = {
  args: {
    totalPages: 10,
    initialPage: 1,
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    totalPages: 10,
    initialPage: 1,
    size: "lg",
  },
};

export const FewPages: Story = {
  args: {
    totalPages: 3,
    initialPage: 1,
  },
};

export const WithMaxVisible: Story = {
  args: {
    totalPages: 20,
    initialPage: 7,
    maxVisible: 3,
  },
};
