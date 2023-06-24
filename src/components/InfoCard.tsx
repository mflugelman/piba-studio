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
};

const InfoCard = (props: InfoCardProps) => {
  return (
    <Card
      sx={{
        backgroundColor: props.color,
        p: 2,
        m: 6,
        borderRadius: "36px",
        height: "400",
      }}
      elevation={0}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%", // Added this
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" color="black.main" textAlign="left">
            {props.title}
          </Typography>
          <Typography variant="body2" textAlign="left">
            {props.body}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
