import { AppBar, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { StyledMainBar } from './MainBar.styles';


const MainBar = () => {
  return (
    <StyledMainBar>
      <Typography align={'center'}>
        Magic Github
      </Typography>
    </StyledMainBar>
  );
};

export default MainBar;


