type Tree = {
  [key: string]: Tree;
};

export const buildTree = (paths: string[]): Tree => {
  const root: Tree = {};

  paths.forEach((path) => {
    const parts = path.split("/");
    let current = root;
    parts.forEach((part) => {
      if (!current[part]) {
        current[part] = {};
      }
      current = current[part];
    });
  });

  return root;
};
