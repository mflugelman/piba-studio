import { Box, Grid, Typography } from "@mui/material";
const TailoredInnovation = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black.main",
        display: "flex",
        alignItems: "center",
        p: { xs: 4, md: 10 },
        height: { xs: "80vh", md: "40vh" },
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            color={"white.main"}
            textAlign="left"
            fontWeight={"bold"}
            fontSize={{ xs: "32px", md: "42px" }}
          >
            Tailored innovation for your success
          </Typography>
        </Grid>
        <Grid item md={2} />
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" color={"white.main"} textAlign={"left"}>
            We bring together creativity, technical expertise, and strategic
            thinking to develop innovative solutions that exceed our clients'
            expectations. We believe that every project is unique and requires a
            tailored approach to achieve the desired outcomes.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TailoredInnovation;
