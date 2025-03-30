// src/components/BehaviorDetails.jsx
import React from 'react';
import styled from 'styled-components';
import NestedTable from './NestedTable';
import keyMappings from './KeyMappings';

const BehaviorContainer = styled.div`
  margin: 10px 0;
  padding: 10px;
  background-color: #f0f9ff;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const BehaviorTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 8px;
  background-color: #e0f7fa;
  font-weight: bold;
  width: 30%;
`;

const TableCell = styled.td`
  padding: 8px;
  background-color: #ffffff;
`;

const BehaviorDetails = ({ behavior }) => (
  <BehaviorContainer>
    <h4>{behavior.name}</h4>
    <BehaviorTable>
      <tbody>
        {Object.entries(behavior.options).map(([key, value]) => (
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
    </BehaviorTable>
  </BehaviorContainer>
);

export default BehaviorDetails;
