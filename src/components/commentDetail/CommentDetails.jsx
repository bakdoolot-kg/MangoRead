import {Avatar, Box, Divider, Typography} from "@mui/material";

const CommentDetails = ({ data }) => {
  return (
    <Box sx={{ display: "flex", mb: 2 }}>
      <Avatar src={data.user.image} sx={{ width: 60, height: 60, mr: 2 }} loading="lazy" />
      <Divider orientation="vertical" flexItem />
      <Box sx={{ ml: 2 }}>
        <Typography sx={{ fontWeight: 600 }}>{data.user.username}</Typography>
        <Typography variant="body1">{data.text}</Typography>
      </Box>
    </Box>
  );
};

export default CommentDetails;
