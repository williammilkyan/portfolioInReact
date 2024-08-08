import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
}));

const StyledBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
}));

function Home() {
  return (
    <StyledContainer>
      <StyledBox>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h5" paragraph>
          Hi, I'm William Yan, a Full Stack Web Developer based in Vancouver, BC, Canada.
        </Typography>
        <Typography variant="body1" paragraph>
          I specialize in designing and developing scalable web applications with a focus on optimizing performance and enhancing user experience.
        </Typography>
        <Box>
          <StyledButton
            variant="contained"
            color="primary"
            component={Link}
            to="/projects"
          >
            View My Projects
          </StyledButton>
          <StyledButton
            variant="contained"
            color="secondary"
            component={Link}
            to="/about"
          >
            About Me
          </StyledButton>
        </Box>
      </StyledBox>
      <StyledBox>
        <Typography variant="h5" component="h2" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="body1" paragraph>
          If you would like to get in touch, please visit my{' '}
          <Button color="primary" component={Link} to="/contact">
            Contact Page
          </Button>
          .
        </Typography>
      </StyledBox>
    </StyledContainer>
  );
}

export default Home;
