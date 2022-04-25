import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function PageHeader(props: any) {
  const { t }: { t: any } = useTranslation();

  return (
    <Grid container alignItems={'center'} justifyContent={'center'}>
      <Grid item>
        <Typography
          variant={'h1'}
          component={'h1'}
          gutterBottom
          textAlign={'center'}
        >
          {t(`${props.title}`)}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
