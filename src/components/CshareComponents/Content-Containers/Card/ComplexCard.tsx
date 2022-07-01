import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

export default function ComplexCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box
      sx={{
        pb: 5,
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Complex Card
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Stack spacing={2}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  C
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Lorem ipsum dolor sit amet"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image="/250_Royall_cover_page-c3d36d9a423b20ae816b344d2c2bb355.jpg"
              alt="Lorem Ipsum"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                mollitia, nisi sunt pariatur, eum voluptates et cum quo culpa,
                explicabo distinctio? Ut nobis esse necessitatibus, nesciunt
                tempora quaerat officia reiciendis?
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Lorem:</Typography>
                <Typography paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores vero eos harum nostrum ipsam ducimus quae? Amet,
                  esse mollitia recusandae cupiditate omnis, reiciendis neque
                  porro nisi maxime sint alias ut.
                </Typography>
                <Typography paragraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam error maiores provident hic ullam enim facilis quo
                  cumque molestias. Asperiores optio hic temporibus aliquam
                  cupiditate enim necessitatibus nemo assumenda harum. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                  aliquam repellat voluptas, cupiditate officia quos, labore
                  vitae porro aspernatur deserunt voluptate eos temporibus?
                  Dolores, quae voluptate. Debitis, facilis repellat. Eum.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with
                  artichokes and peppers, and cook without stirring, until most
                  of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down
                  into the rice, and cook again without stirring, until mussels
                  have opened and rice is just tender, 5 to 7 minutes more.
                  (Discard any mussels that don&apos;t open.)
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  inventore. Similique sapiente accusantium velit incidunt quas,
                  odit saepe quis, ullam possimus quod ad officia modi, eaque
                  iste et debitis laudantium!
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Stack>
      </Stack>
    </Box>
  );
}
