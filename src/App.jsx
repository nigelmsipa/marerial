/** @format */

import React from 'react';

import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export default function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className={classes.icon} />

          <Typography variant='h6'>Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth='sm' style={{ marginTop: '100px' }}>
            <Typography
              variant='h3'
              align='center'
              color='textPrimary'
              gutterBottom>
              Photo Album
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur rem mollitia distinctio inventore totam ea ipsam odio
              eius suscipit! Ipsam quae incidunt natus ad odio reprehenderit
              unde facilis obcaecati voluptas.
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4} align>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image='https://source.unsplash.com/random'
                    title='Image title'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5'>
                      Heading
                    </Typography>
                    <Typography gutterBottom variant='h5'>
                      This is a media card you can use this section to describe
                      the media stuff
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>
                      View
                    </Button>
                    <Button size='small' color='primary'>
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}
