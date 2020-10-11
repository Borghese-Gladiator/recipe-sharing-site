import React from 'react'
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { motion } from "framer-motion"

import LearnJapanese from '../images/Learn_Japanese.png'

function AnimatedLazyLoadImage(props) {
  return (
    <motion.div
      initial={{ 
        x: '0px',
        opacity: 0 
      }}
      animate={{
        x: '100px',
        opacity: 1
      }}
      transition={{
        type: 'tween',
        duration: 3
      }}
      style={{
        maxHeight: 'inherit'
      }}
    >
      <LazyLoadImage
        className={props.classStyling}
        alt="Learn Japanese"
        effect="blur"
        src={props.imgPath}
      /> 
    </motion.div>
  )
}

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  },
  img: {
    height: '400px',
  }
}));

export default function HomeBackdrop(props) {
  const imagesToShow=new Array(8).fill({"imgPath": LearnJapanese})

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleToggle}>
        Show backdrop
      </Button>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <motion.div>
          <Grid container spacing={3} justify='center'>
            {
              imagesToShow.map((obj, idx) => {
                return (
                  <Grid key={"Meme" + idx} item>
                    <AnimatedLazyLoadImage
                      classStyling={classes.img}
                      imgPath={obj.imgPath}
                      alt="Learn Japanese"
                      effect="blur"
                    />
                  </Grid>
                )
              })
            }
          </Grid>
        </motion.div>
      </Backdrop>
    </div>
  );
}