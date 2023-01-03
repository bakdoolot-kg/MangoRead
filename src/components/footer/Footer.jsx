import {Box, Container, Divider, Grid, Typography} from "@mui/material";

const Footer = () => {
  return (
      <Box
          sx={{
            width: "100%",
            height: "auto",
            backgroundColor: "secondary.main",
            paddingTop: "1rem",
            paddingBottom: "1rem",
              mt: 3
          }}
      >
        <Container
          className="container"
        >
          <Grid container direction="row" sx={{ mt: 3 }}>
            <Grid item xs={4}>
              <Typography color="black" variant="h5">
                React Starter App
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography color="textSecondary" variant="subtitle1">
                {`${new Date().getFullYear()} | React | Material UI | React Router`}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography color="textSecondary" variant="subtitle1">
                {`${new Date().getFullYear()} | React | Material UI | React Router`}
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ mt: 5 }}/>
        <Box>
          <Typography>©{new Date().getFullYear()}, All right reserved.</Typography>
        </Box>
        </Container>
      </Box>
  )
}

export default Footer
