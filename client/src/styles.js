import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.primary.contrastText,
}));

export const StyledHeading = styled(Typography)(() => ({
  color: 'rgba(0, 183, 255, 1)',
}));

export const StyledImage = styled('img')(() => ({
  marginLeft: '15px',
}));


