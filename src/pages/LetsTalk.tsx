import { Box, Button, Grid, Typography } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
const LetsTalk = () => {
  const { t } = useTranslation("LetsTalk");

  return (
    <Box
      sx={{
        background:
          "radial-gradient(126.38% 242.21% at 83.4% 91.45%, rgba(123, 159, 246, 0.27) 54.17%, rgba(207, 207, 207, 0.13) 94.42%, rgba(207, 207, 207, 0.42) 100%);",
        p: { xs: 4, md: 14 },
        height: "40vh",
        display: "flex",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Typography variant="h3" textAlign={"left"}>
            <Trans i18nKey="LetsTalk.ThisWasUs">{t("ThisWasUs")}</Trans>
          </Typography>
        </Grid>
        <Grid md={2} />
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" textAlign="center" m={4}>
            {t("LetsTalk")}
          </Typography>
          <Button
            sx={{ width: { xs: "50%", md: "auto" } }}
            variant="contained"
            onClick={() =>
              window.open("https://calendly.com/hellopibastudio", "_blank")
            }
          >
            <Typography variant="button" color="white.main">
              {t("BookCall")}
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LetsTalk;
