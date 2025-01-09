// components/TreeNode.tsx
import React, { useState } from "react";
import { TreeItem } from "@mui/x-tree-view";
import { ExpandMore, ChevronRight } from "@mui/icons-material";

type TreeNodeProps = {
  itemId: string;
  label: string;
  children: React.ReactNode;
};

const TreeNode: React.FC<TreeNodeProps> = ({ itemId, label, children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <TreeItem
      id={itemId}
      label={label}
      onClick={toggleExpand}
      expandIcon={<ChevronRight />}
      collapseIcon={<ExpandMore />}
    >
      {expanded && children}
    </TreeItem>
  );
};

export default TreeNode;
