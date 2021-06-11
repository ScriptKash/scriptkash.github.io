import { Box, Button, fade, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import useLayout from '../hooks/useLayout';
import Link from '../src/Link';

import { colors } from '../theme/colors.theme';

const NotFound = () => {
  const { pageActive, loading, desktop, handleLoading, handleChangePage } = useLayout();

  useEffect(() => {
    handleChangePage(10);
  }, []); //eslint-disable-line

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Box>
        <Typography variant="h3" style={{ fontWeight: 800 }}>
          Error 404
        </Typography>
        <Typography variant="body1" style={{ color: fade(colors.white, 0.5) }}>
          This page not exists
        </Typography>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Button
            onClick={() => handleChangePage(0)}
            variant="contained"
            color="primary"
            style={{
              backgroundColor: colors.blueFernando,
              fontWeight: 700,
              color: colors.white,
              outline: 'none',
              borderRadius: 20,
              marginTop: 10,
            }}
          >
            Go to home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NotFound;
