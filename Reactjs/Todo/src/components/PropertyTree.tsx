// src/components/PropertyTree.jsx
import React from 'react';
import TreeNode from './TreeNode';

const PropertyTree = ({ data }) => {
  return (
    <div>
      <h2>Property: {data.propertyName}</h2>
      <TreeNode node={data.rules} />
    </div>
  );
};

export default PropertyTree;
