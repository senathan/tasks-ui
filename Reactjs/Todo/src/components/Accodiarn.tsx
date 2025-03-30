// src/components/Accordion.tsx
import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';

const AccordionWrapper = styled.div`
  border: 1px solid #ccc;
  margin: 10px 0;
  border-radius: 5px;
`;

const AccordionHeader = styled.div`
  background-color: #005f73;
  color: #fff;
  padding: 12px 16px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #0a9396;
  }
`;

const AccordionBody = styled.div<{ isOpen: boolean }>`
  background-color: #edf6f9;
  padding: 15px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const Chevron = styled.span<{ isOpen: boolean }>`
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
`;

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionWrapper>
      <AccordionHeader onClick={() => setIsOpen(!isOpen)}>
        {title}
        <Chevron isOpen={isOpen}>▶</Chevron>
      </AccordionHeader>
      <AccordionBody isOpen={isOpen}>
        {children}
      </AccordionBody>
    </AccordionWrapper>
  );
};

export default Accordion;
