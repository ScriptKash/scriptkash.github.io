import React, { useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Slide,
  Container,
  fade,
  Grid,
} from '@material-ui/core';
import { colors } from '../theme/colors.theme';

import { experiences } from '../data/experiences';
import HeadComponent from '../components/Head';

const Experience = ({ handleChangePage, desktop }) => {
  useEffect(() => {
    handleChangePage(1);
  }, []); //eslint-disable-line

  return (
    <>
      <HeadComponent title="Experience" />
      <Box
        width="100%"
        height="100vh"
        textAlign="center"
        position="absolute"
        className="parallax-el"
        style={{
          backgroundImage: `url(./assets/images/parallax/figures.png)`,
          backgroundSize: 'contain',
          opacity: 0.7,
        }}
      />
      <Slide direction="top" in={true} mountOnEnter unmountOnExit>
        <Box position="relative" mt={desktop ? 15 : 10}>
          <Container maxWidth="lg">
            <Box mb={2}>
              <Typography variant="h2">Experience</Typography>
            </Box>
            <Box>
              <Grid container spacing={2}>
                {experiences.map((exp) => {
                  const isPresent = exp.time.includes('Present');
                  return (
                    <Grid key={exp.title} item xs={12} md={4}>
                      <Box clone height="100%">
                        <Card
                          style={{
                            backgroundColor: isPresent
                              ? fade(colors.blueFernando, 0.5)
                              : colors.black,
                            border: `3px solid ${isPresent ? colors.blueFernando : colors.black}`,
                            borderRadius: 15,
                          }}
                        >
                          <CardContent>
                            <Typography style={{ color: fade(colors.white, 0.6) }} gutterBottom>
                              {exp.time}
                            </Typography>

                            <Typography variant="h6" component="h2" style={{ color: colors.white }}>
                              {exp.title}
                            </Typography>
                            <Box minHeight={70}>
                              <Typography
                                variant="body2"
                                component="p"
                                style={{ color: fade(colors.white, 0.8) }}
                              >
                                {exp.description}
                              </Typography>
                            </Box>
                            <Box textAlign="center">
                              <img src={exp.image} style={{ width: 130 }} alt={exp.title} />
                            </Box>
                          </CardContent>
                        </Card>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Container>
        </Box>
      </Slide>
    </>
  );
};

export default Experience;
