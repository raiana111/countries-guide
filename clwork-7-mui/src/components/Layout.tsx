import { ReactNode } from 'react';
import Box from '@mui/material/Box';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', width: '100vw', minHeight: '100vh', overflow: 'hidden' }}>
      {children}
    </Box>
  );
}