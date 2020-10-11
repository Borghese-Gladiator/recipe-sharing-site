import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// AboutRoles Container
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
// Card
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
// AboutRoles Icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const cardUseStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  headerColor: {
    color: "#355C7D",
  },
  listItemCenter: {
    textAlign: "center"
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  flexRowItem: {
    flex: "1 1 auto",
    textAlign: "center",
    margin: "5px"
  },
}));

function RecipeReviewCard(props) {
  const classes = cardUseStyles();
  const { name, ingredients, tags, pictures, user } = props
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        {
          pictures()
        }
        <Typography variant="h4">
          {name}
        </Typography>
        <Typography variant="overline" display="block" style={{textAlign:"left"}}>
          By <strong><u>{user}</u></strong>
        </Typography>
        <div className={classes.flexRow}>
          {tags.map((val, idx) => {
            return (
              <Typography color="textSecondary" className={classes.flexRowItem}>
                {val}
              </Typography>
            )
          })}
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6">
            Ingredients
          </Typography>
          <List dense={true} style={{paddingTop:0}}>
            {ingredients.map((value, idx) => {
              return (
                <ListItem key={`${value} ${idx}`}>
                  <ListItemText
                    disableTypography
                    primary={<Typography variant="subtitle1">{value}</Typography>}
                  />
                </ListItem>
              )
            })}
          </List>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardContent>
      </Collapse>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "5vh",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function AboutRoles(props) {
  const classes = useStyles();
  const { id, recipeData } = props

  return (
    <Container id={id} className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={1}>
            {recipeData.map((obj, idx) => (
              <Grid key={`${obj.title} ${idx}`} item>
                <RecipeReviewCard
                  name={obj.name}
                  ingredients={obj.ingredients}
                  tags={obj.tags}
                  pictures={obj.pictures}
                  user={obj.user}
                  style={{background: "#fff"}}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
