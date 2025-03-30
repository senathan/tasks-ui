// src/components/TreeNode.jsx
import React from 'react';
import BehaviorDetails from './BehaviorDetails';
import CriteriaDetails from './CriteriaDetails';
import Accordion from './Accodiarn';

const TreeNode = ({ node }) => (
  <Accordion title={node.name}>
    {node.behaviors && node.behaviors.length > 0 && (
      <div>
        <h3>Behaviors:</h3>
        {node.behaviors.map((behavior, idx) => (
          <BehaviorDetails key={idx} behavior={behavior} />
        ))}
      </div>
    )}

    {node.criteria && node.criteria.length > 0 && (
      <div>
        <h3>Criteria:</h3>
        {node.criteria.map((criteria, idx) => (
          <CriteriaDetails key={idx} criteria={criteria} />
        ))}
      </div>
    )}

    {node.children && node.children.length > 0 && (
      <div>
        <h3>Children:</h3>
        {node.children.map((child, idx) => (
          <TreeNode key={idx} node={child} />
        ))}
      </div>
    )}
  </Accordion>
);

export default TreeNode;
