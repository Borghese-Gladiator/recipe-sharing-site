import React from 'react'
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { motion } from "framer-motion"

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  },
  img: {
    height: '1000px',
  },
  bottomCenterText: {
    position: 'absolute',
    bottom: '8px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    color: "white",
    fontSize: "40px",
    paddingRight: "400px",
    maxWidth:"10px"
  }
}));

export default function SimpleBackdrop(props) {
  const nameText = props.nameText
  const imgPath = props.imgPath
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
        <motion.div
          initial={{ 
            x: '0px',
            opacity: 0 
          }}
          animate={{
            x: '690px',
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
          <h1 className={classes.bottomCenterText}>{nameText}</h1>
          <LazyLoadImage
            className={classes.img}
            alt="Character Overlay"
            effect="blur"
            src={imgPath}
          />
        </motion.div>
      </Backdrop>
    </div>
  );
}