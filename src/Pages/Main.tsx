import React from 'react';
import styled, { withTheme } from 'styled-components';

// Own components
import { Container, Paper, TextField } from '@mui/material';
import Browser from '../Components/Browser';


const StyledPaper = styled(Paper)`
  padding: 20px;
  background-color: ${({ theme: { main } }) => main.secondary} !important;
`;


const Main: React.FC = () => (
  <>
    <Container fixed maxWidth={'lg'}>
      <StyledPaper elevation={5}>
        <Browser />
      </StyledPaper>
    </Container>
  </>
);

export default withTheme(Main);
