export interface TreeNodeData {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  children?: TreeNodeData[];
}
