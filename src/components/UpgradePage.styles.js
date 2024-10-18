import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

export const Icon = styled.div`
  font-size: 24px;
  cursor: pointer;
  margin-right: 10px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: left;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;

export const FooterButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;
