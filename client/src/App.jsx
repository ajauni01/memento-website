import Container from '@mui/material/Container';
import mementoLogo from "../src/images/memento.png";
import { Grid, Grow } from '@mui/material';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { StyledHeading, StyledAppBar, StyledImage } from './styles';


function App() {
  // TODO: send the PARENT folder to GitHub


  return (
    <Container maxWidth="lg">
      <StyledAppBar position="static" color="inherit">
        <StyledHeading variant="h2" align='center'>
          memento
        </StyledHeading>

        {/* logo image */}
        <StyledImage src={mementoLogo} alt="mementoImg" height={60} />
      </StyledAppBar>

      {/* PROVIDES SIMPLE ANIMATION EFFECT */}
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            {/* POST COMPONENT*/}
            <Grid item xs={12} sm={7}>
              <Posts></Posts>
            </Grid>

            {/* FORM COMPONENT */}
            <Grid item xs={12} sm={4}>
              <Form></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
