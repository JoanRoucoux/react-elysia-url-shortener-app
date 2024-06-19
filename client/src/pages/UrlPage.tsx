import { Link, useParams } from 'react-router-dom';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useGetUrlQuery } from '../slices/urlsApiSlice';
import { useEffect } from 'react';

const UrlPage = (): JSX.Element => {
  const { shortenUrlKey } = useParams();

  const {
    data,
    isSuccess,
    isLoading,
    isError,
  } = useGetUrlQuery(shortenUrlKey || '');

  useEffect(() => {
    if (isSuccess) {
      window.location.replace(data);
    }
  }, [
    isSuccess,
  ]);

  return (
    <>
      {(isLoading && (
        <CircularProgress />
      )) ||
        (isError && (
          <>
            <Typography
              component="h1"
              variant="h4"
              color="primary"
              align="center"
              gutterBottom
            >
              Oops, something went wrong
            </Typography>
            <Typography variant="subtitle1" align="center" sx={{ mb: 4 }}>
              The link has expired or is no longer available.
            </Typography>
            <Box textAlign='center'>
              <Button variant="contained" component={Link} to={'/'}>
                Back home
              </Button>
            </Box>
          </>
        ))}
    </>
  );
};

export default UrlPage;
