import mobile from "../../Components/Images/mobile1.png";
import playstore from "../../Components/Images/gplay1.png";
import apple from "../../Components/Images/apple1.png";
import arrow from "../../Components/Images/arrow.png";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import SmsForm from "./Smsform";

// Download app component to render input details using SmsForm component
export default function DownloadApp() {
  return (
    <Box
      sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt: 5 }}
    >
      <Container>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap={3}
        >
          {/* Left Column: Mobile Image */}
          <Box flexBasis={{ xs: "100%", md: "45%" }}>
            <Box src={mobile} component="img" width={1} height="auto" />
          </Box>

          {/* Right Column: Content */}
          <Box
            flexBasis={{ xs: "100%", md: "50%" }}
            position="relative"
            pl={{ xs: "36px", md: "50px" }}
            mb={{ xs: 4, md: 0 }}
          >
            <Typography variant="h2" mb={2}>
              Download the
              <br />
              <Box component="span" color="primary.main">
                Medify{" "}
              </Box>
              App
            </Typography>

            <Box
              src={arrow}
              component="img"
              width={{ xs: 24, md: 40 }}
              position="absolute"
              left={0}
              top={50}
            />

            <SmsForm />

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 1, md: 2 }}
              mt={3}
            >
              <Button
                sx={{
                  bgcolor: "#333",
                  color: "#fff",
                  py: 1.5,
                  borderRadius: 1.5,
                }}
                size="large"
                startIcon={<img src={playstore} height={24} />}
                variant="contained"
                disableElevation
              >
                Play Store
              </Button>
              <Button
                sx={{
                  bgcolor: "#333",
                  color: "#fff",
                  py: 1.5,
                  borderRadius: 1.5,
                }}
                size="large"
                startIcon={<img src={apple} height={24} />}
                variant="contained"
                disableElevation
              >
                Apple Store
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}