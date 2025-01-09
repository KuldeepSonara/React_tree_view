// App.tsx
import React from "react";
import TreeViewComponent from "./components/TreeViewComponent";

const paths = [
  "a/b/c/d/z.pdf",
  "a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p/q/r/s/t.pdf",
  "a/b/c/d/e/x.txt",
  "a1/b1/c1/d1/e1/f1/g1/h1/i1/j1/k1/l1/m1/n1/o1/p1/q1/r1/s1/t1.pdf",
  "a/b/k.txt",
];

const App: React.FC = () => {
  return (
    <div>
      <h1>Tree View Example</h1>
      <TreeViewComponent paths={paths} />
    </div>
  );
};

export default App;
