import React, { useState, useEffect, useRef, useMemo } from "react";

function buildMaps(root) {
  const parent = {};
  const children = {};
  const nodes = {};

  function dfs(node, parentId = null) {
    nodes[node.id] = { id: node.id, label: node.label };
    parent[node.id] = parentId;
    if (!node.children || node.children.length === 0) {
      children[node.id] = [];
    } else {
      children[node.id] = node.children.map(c => c.id);
      node.children.forEach(c => dfs(c, node.id));
    }
  }

  dfs(root);
  return { parent, children, nodes };
}

function getDescendants(id, childrenMap) {
  const res = [];
  const stack = [...(childrenMap[id] || [])];
  while (stack.length) {
    const cur = stack.pop();
    res.push(cur);
    (childrenMap[cur] || []).forEach(c => stack.push(c));
  }
  return res;
}

export default function NestedCheckbox({ tree, setSelectedCount }) {
  const { parent, children, nodes } = useMemo(() => buildMaps(tree), [tree]);
  const [checkedSet, setCheckedSet] = useState(new Set());
  const [indeterminateSet, setIndeterminateSet] = useState(new Set());

  function updateSets(newChecked, newIndeterminate) {
    setCheckedSet(new Set(newChecked));
    setIndeterminateSet(new Set(newIndeterminate));
    setSelectedCount(newChecked.size - 1);
  }

  function toggleNode(nodeId, shouldCheck) {
    const newChecked = new Set(checkedSet);
    const newIndeterminate = new Set(indeterminateSet);

    const descendants = getDescendants(nodeId, children);
    const toApply = [nodeId, ...descendants];
    toApply.forEach(id => {
      if (shouldCheck) newChecked.add(id);
      else newChecked.delete(id);
      newIndeterminate.delete(id);
    });

    let p = parent[nodeId];
    while (p != null) {
      const childIds = children[p] || [];
      const checkedCount = childIds.filter(cid => newChecked.has(cid)).length;

      if (checkedCount === 0) {
        newChecked.delete(p);
        newIndeterminate.delete(p);
      } else if (checkedCount === childIds.length) {
        newChecked.add(p);
        newIndeterminate.delete(p);
      } else {
        newChecked.delete(p);
        newIndeterminate.add(p);
      }
      p = parent[p];
    }

    updateSets(newChecked, newIndeterminate);
  }
  function TreeNode({ id, level = 0 }) {
  const ref = useRef(null);
  const isChecked = checkedSet.has(id);
  const isIndeterminate = indeterminateSet.has(id);
  const hasChildren = (children[id] || []).length > 0;

  useEffect(() => {
    if (ref.current) ref.current.indeterminate = isIndeterminate;
  }, [isIndeterminate]);

  return (
    <div className="tree-node" style={{ marginLeft: level * 25 }}>
      <label>
        <input
          ref={ref}
          type="checkbox"
          checked={isChecked}
          onChange={e => toggleNode(id, e.target.checked)}
          className="checkbox"
        />
        <span className="checkbox-label">{nodes[id].label}</span>
      </label>

      {hasChildren &&
        children[id].map(cid => (
          <TreeNode key={cid} id={cid} level={level + 1} />
        ))}
    </div>
  );
}


  return <TreeNode id={tree.id} />;
}
