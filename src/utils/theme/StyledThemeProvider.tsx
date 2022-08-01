import React from 'react';
import { ThemeProvider } from 'styled-components';


//Utils
import theme from './theme';
import { ChildrenProps } from '@typing/commonProperties';

const StyledThemeProvider = ({ children }: ChildrenProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};


export default StyledThemeProvider;