import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

type InfoCardProps = {
  title: string;
  body: string;
  color: string;
  imageUrl: string;
  backgroundPosition: "right" | "left";
  backgroundPositionY: number | string;
};

const InfoCard = (props: InfoCardProps) => {
  return (
    <Card
      sx={{
        backgroundColor: props.color,
        mt: 1,
        mb: 1,
        p: 6,
        height: 500,
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
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ alignSelf: "flex-start" }}>
            <Typography variant="h6" color="black.main" textAlign="left">
              {props.title}
            </Typography>
            <Box
              sx={{
                height: 10,
                width: 50,
                backgroundColor: "secondary.main",
                mb: 6,
              }}
            />
          </Box>
          <Typography
            variant="body2"
            textAlign="left"
            sx={{ lineHeight: "40px" }}
          >
            {props.body}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
