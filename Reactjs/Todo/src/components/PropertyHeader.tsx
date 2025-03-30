import React from 'react';

const PropertyHeader = ({ property }) => {
  return (
    <div className="property-header">
      <h2>Property: {property.propertyName}</h2>
      <p>Version: {property.propertyVersion}</p>
      <p>Account ID: {property.accountId}</p>
      <p>Contract ID: {property.contractId}</p>
      <p>Group ID: {property.groupId}</p>
    </div>
  );
};

export default PropertyHeader;
