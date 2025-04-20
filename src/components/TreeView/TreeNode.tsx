import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { TreeNodeData } from "./TreeView.types";

export type TreeNodeProps = {
  node: TreeNodeData;
  level: number;
};

export const TreeNode = ({ node, level = 0 }: TreeNodeProps) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className={`pl-${level * 4} my-2`}>
      <div
        className="flex flex-col gap-1 py-2 px-3 rounded-md cursor-pointer select-none
        hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 transition
        text-gray-800"
        onClick={() => hasChildren && setExpanded(!expanded)}
        tabIndex={0}
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === " ") && hasChildren) {
            setExpanded(!expanded);
          }
        }}
        role="treeitem"
        aria-expanded={expanded}
        aria-label={node.label}
      >
        <div className="flex items-center gap-2">
          {/* Arrow */}
          {hasChildren ? (
            expanded ? (
              <ChevronDown className="w-4 h-4 text-gray-500" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-500" />
            )
          ) : (
            <span className="w-4 h-4" />
          )}

          {/* Optional icon */}
          {node.icon && <span className="text-gray-500">{node.icon}</span>}

          {/* Title */}
          <span className="font-medium">{node.label}</span>
        </div>

        {/* Optional Description */}
        {node.description && (
          <span className="ml-6 text-sm text-gray-500">{node.description}</span>
        )}
      </div>

      {/* Children */}
      {expanded && hasChildren && (
        <div className="ml-4 border-l border-gray-300 pl-2 space-y-1">
          {node.children!.map((child: TreeNodeData) => (
            <TreeNode key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};
