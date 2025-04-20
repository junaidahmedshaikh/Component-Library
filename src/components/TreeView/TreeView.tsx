import React from "react";
import { TreeNodeData } from "./TreeView.types";
import { TreeNode } from "./TreeNode";

interface TreeViewProps {
  data: TreeNodeData[];
}

export const TreeView: React.FC<TreeViewProps> = ({ data }) => {
  return (
    <div
      className="bg-white m-4 p-4 rounded-lg shadow-md border border-gray-200 w-full max-w-md text-sm"
      role="tree"
    >
      {data.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
};
