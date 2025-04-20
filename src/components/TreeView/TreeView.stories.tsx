import type { Meta, StoryObj } from '@storybook/react';
import { File, FileCode, Folder, FolderClosed } from 'lucide-react';
import { sampleTree } from '../../constant';
import { TreeView } from './TreeView';

const meta: Meta<typeof TreeView> = {
  title: 'Components/TreeView',
  component: TreeView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TreeView>;

export const Default: Story = {
  args: {
    data: sampleTree,
  },
};

// Create a custom tree for a different example
const customTree = [
  {
    id: '1',
    label: 'Projects',
    icon: <Folder className="w-4 h-4" />,
    children: [
      {
        id: '1-1',
        label: 'React Apps',
        icon: <FolderClosed className="w-4 h-4" />,
        description: 'All React-based applications',
        children: [
          {
            id: '1-1-1',
            label: 'Todo App',
            icon: <File className="w-4 h-4" />,
            description: 'Simple todo application'
          },
          {
            id: '1-1-2',
            label: 'Weather App',
            icon: <File className="w-4 h-4" />,
          },
        ],
      },
      {
        id: '1-2',
        label: 'Documentation',
        icon: <FileCode className="w-4 h-4" />,
        description: 'Project documentation and guides',
      },
    ],
  },
];

export const CustomTree: Story = {
  args: {
    data: customTree,
  },
};

// Single level tree
const singleLevelTree = [
  {
    id: '1',
    label: 'File 1',
    icon: <File className="w-4 h-4" />,
  },
  {
    id: '2',
    label: 'File 2',
    icon: <File className="w-4 h-4" />,
  },
  {
    id: '3',
    label: 'File 3',
    icon: <File className="w-4 h-4" />,
  },
];

export const SingleLevel: Story = {
  args: {
    data: singleLevelTree,
  },
};
