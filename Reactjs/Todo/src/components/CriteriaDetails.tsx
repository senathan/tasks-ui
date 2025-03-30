// src/components/CriteriaDetails.jsx
import React from 'react';
import styled from 'styled-components';
import NestedTable from './NestedTable';
import keyMappings from './KeyMappings';

const CriteriaContainer = styled.div`
  margin: 10px 0;
  padding: 10px;
  background-color: #e0ffe0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const CriteriaTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 8px;
  background-color: #e8f5e9;
  font-weight: bold;
  width: 30%;
`;

const TableCell = styled.td`
  padding: 8px;
  background-color: #ffffff;
`;

const CriteriaDetails = ({ criteria }) => (
  <CriteriaContainer>
    <h4>{criteria.name}</h4>
    <CriteriaTable>
      <tbody>
        {Object.entries(criteria.options).map(([key, value]) => (
          <TableRow key={key}>
            <TableHeader>{keyMappings[key] || key}</TableHeader>
            <TableCell>
              {typeof value === 'object' && value !== null ? (
                <NestedTable data={value} /> // Render nested JSON values
              ) : (
                value.toString()
              )}
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </CriteriaTable>
  </CriteriaContainer>
);

export default CriteriaDetails;
