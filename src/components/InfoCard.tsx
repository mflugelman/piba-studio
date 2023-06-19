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
      sx={{ backgroundColor: props.color, p: 6, m: 6, borderRadius: "36px" }}
      elevation={0}
    >
      <Typography variant="h4" color="black.main" textAlign={"left"}>
        {props.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" textAlign={"left"}>
          {props.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
