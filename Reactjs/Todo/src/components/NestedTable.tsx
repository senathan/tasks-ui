// src/components/NestedTable.jsx
import React from 'react';
import styled from 'styled-components';

const NestedTableWrapper = styled.div`
  margin-left: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 8px;
  background-color: #f0f0f0;
  font-weight: bold;
  width: 30%;
`;

const TableCell = styled.td`
  padding: 8px;
  background-color: #ffffff;
`;

const NestedTable = ({ data }) => {
  if (typeof data !== 'object' || data === null) {
    // Render non-object values directly
    return <span>{data.toString()}</span>;
  }

  return (
    <NestedTableWrapper>
      <Table>
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <TableRow key={key}>
              <TableHeader>{key}</TableHeader>
              <TableCell>
                {typeof value === 'object' && value !== null ? (
                  <NestedTable data={value} /> // Recursive rendering for nested objects
                ) : (
                  value.toString()
                )}
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </NestedTableWrapper>
  );
};

export default NestedTable;
