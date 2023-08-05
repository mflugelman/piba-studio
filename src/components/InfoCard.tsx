import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

type InfoCardProps = {
  title: string;
  body: string;
  color: string;
  imageUrl: string;
  backgroundPosition: "right" | "left";
  backgroundPositionY: number | string;
};

const InfoCard = (props: InfoCardProps) => (
  <Card
    sx={{
      backgroundColor: props.color,
      mt: 1,
      mb: 1,
      p: { xs: 2, md: 6 },
      height: { xs: "100%" },
      borderRadius: "36px",
      backgroundImage: `url(${props.imageUrl})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: props.backgroundPosition,
      backgroundSize: "auto 60%",
      backgroundPositionY: props.backgroundPositionY,
      boxShadow: 0,
    }}
    elevation={0}
  >
    <CardContent sx={{ height: "100%" }}>
      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={12}>
          <Typography variant="h6" color="black.main" textAlign="left">
            {props.title}
          </Typography>
          <Box
            sx={{
              height: 10,
              width: 50,
              backgroundColor: "secondary.main",
              mb: { xs: 2, md: 0 },
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box id="text" textAlign="left">
            <Typography variant="body2" sx={{ lineHeight: { xs: 1.8, md: 2 } }}>
              {props.body}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default InfoCard;
