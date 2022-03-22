import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReportIcon from "@mui/icons-material/Report";
import Tooltip from "@mui/material/Tooltip";
import { ExpandMore } from "./ExpandMore";
import { flagDialog } from "./flagDialog";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

// import { Snackbar } from "./Snackbar";

export default function Post() {
  // Expand box
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Alert dialog
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Textfield
  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Card sx={{ maxWidth: 768 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            AM
          </Avatar>
        }
        action={
          <>
            <IconButton aria-label="flag" onClick={handleClickOpen}>
              <Tooltip title="Signaler">
                <ReportIcon />
              </Tooltip>
            </IconButton>
            {flagDialog(open, handleClose)}
          </>
        }
        title="post.username"
        subheader="post.createdAt"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="post.title"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum." (post.message)
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{ fontSize: 50 }} />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{ fontSize: 50 }} />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-multiline-flexible"
              label="Votre commentaire"
              multiline
              maxRows={4}
              value={value}
              onChange={handleChange}
            />
          </div>
        </Box>
        <CardContent>
          <Typography paragraph>Commentaires:</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
