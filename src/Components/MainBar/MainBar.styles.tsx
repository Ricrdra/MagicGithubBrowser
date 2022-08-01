import styled from 'styled-components';
import { AppBar } from '@mui/material';

export const StyledMainBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.main.primary} !important;
  padding: 10px;

  & + * {
    margin-top: 60px;
  }
`;
