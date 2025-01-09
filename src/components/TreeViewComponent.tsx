// components/TreeViewComponent.tsx
import React from "react";
import { SimpleTreeView } from "@mui/x-tree-view";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ChevronRight from "@mui/icons-material/ChevronRight";
import TreeNode from "./TreeNode";
import { buildTree } from "../utils/buildTree";

type TreeViewComponentProps = {
  paths: string[];
};

const TreeViewComponent: React.FC<TreeViewComponentProps> = ({ paths }) => {
  const treeData = buildTree(paths);

  const renderTree = (node: any, parentId = "") => {
    return Object.keys(node).map((key, index) => {
      const currentItemId = parentId ? `${parentId}_${index}` : `${index}`;
      const isLeaf = Object.keys(node[key]).length === 0;

      return (
        <TreeNode key={currentItemId} itemId={currentItemId} label={key}>
          {!isLeaf && renderTree(node[key], currentItemId)}
        </TreeNode>
      );
    });
  };

  return (
    <SimpleTreeView
      slots={{
        collapseIcon: ExpandMore,
        expandIcon: ChevronRight,
      }}
    >
      {renderTree(treeData)}
    </SimpleTreeView>
  );
};

export default TreeViewComponent;
