import type { Meta, StoryObj } from '@storybook/react';
import { Bell, Contact, Settings, UserRound, Users } from 'lucide-react';
import { Tabs } from './Tabs';

// Create enhanced tab items with more examples of disabled tabs
const enhancedTabItems = [
  {
    label: "Home",
    content: "This is the Home tab content. It shows the main dashboard view.",
    icon: <UserRound className="w-5 h-5" />,
  },
  {
    label: "Contact",
    content: "This tab contains contact information and messaging options.",
    icon: <Contact className="w-5 h-5" />,
  },
  {
    label: "Settings",
    content: "Configure your application preferences here.",
    icon: <Settings className="w-5 h-5" />,
    disabled: true,
  },
  {
    label: "Notifications",
    content: "View your recent notifications and alerts.",
    icon: <Bell className="w-5 h-5" />,
  },
  {
    label: "Users",
    content: "Manage users and permissions.",
    icon: <Users className="w-5 h-5" />,
    disabled: true,
  }
];

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tabs: { control: 'object' },
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical']
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
  }
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Horizontal: Story = {
  args: {
    tabs: enhancedTabItems,
    orientation: 'horizontal',
    size: 'md',
  },
};

export const Vertical: Story = {
  args: {
    tabs: enhancedTabItems,
    orientation: 'vertical',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    tabs: enhancedTabItems,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    tabs: enhancedTabItems,
    size: 'lg',
  },
};

// Example with alternating disabled tabs
export const AlternatingDisabled: Story = {
  args: {
    tabs: [
      {
        label: "Tab 1",
        content: "Content for Tab 1",
      },
      {
        label: "Tab 2 (Disabled)",
        content: "You can't see this content",
        disabled: true,
      },
      {
        label: "Tab 3",
        content: "Content for Tab 3",
      },
      {
        label: "Tab 4 (Disabled)",
        content: "You can't see this content either",
        disabled: true,
      },
      {
        label: "Tab 5",
        content: "Content for Tab 5",
      },
    ],
    size: 'md',
  },
};

// Example with first tab disabled
export const FirstDisabled: Story = {
  args: {
    tabs: [
      {
        label: "Disabled Tab",
        content: "This content is not accessible",
        disabled: true,
        icon: <Bell className="w-5 h-5" />,
      },
      ...enhancedTabItems.slice(0, 2)
    ],
    size: 'md',
  },
};
