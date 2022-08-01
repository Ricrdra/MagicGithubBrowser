import React from 'react';
import { IconButton, Stack, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import noop from '@utils/noop';

type BrowserProps = {
  value?: string,
  onChange?: (value?: string) => unknown,
  handleBrowse?: (value?: string) => unknown,
  onBrowse?: (value?: string) => unknown,
  data?: unknown[],
  placeholder?: string,
}

const Browser = ({
                   value,
                   onChange = noop,
                   data,
                   onBrowse = noop,
                   handleBrowse = noop,
                   placeholder = 'Browse',
                 }: BrowserProps) => {
  return (
    <Stack direction={'row'} spacing={1} alignItems={'center'} justifyContent={'center'}>
      <TextField fullWidth placeholder={'Search'} />
      <IconButton>
        <Search />
      </IconButton>
    </Stack>
  );
};

export default Browser;
