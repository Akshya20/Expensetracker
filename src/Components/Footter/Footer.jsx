import {
    Box,
    Button,
    Container,
    Link,
    Stack,
    Typography,
  } from "@mui/material";
  import logo from "../../Components/Images/logo.png";
  import fb from "../../Components/Images/fb.png";
  import pinterest from "../../Components/Images/pintrest.png";
  import twitter from "../../Components/Images/twitter.png";
  import yt from "../../Components/Images/utube.png";
  import FooterLink from "./Footerlink";
  
  export default function Footer() {
    return (
      <Box bgcolor="steelblue" pb={3} pt={6}>
        <Container maxWidth="xl">
          <Box display="flex" flexWrap="wrap" >
            {/* First Column */}
            <Box flexBasis={{ xs: "100%", md: "37.5%" }}>
              <Stack
                alignItems="flex-start"
                justifyContent="space-between"
                height={1}
              >
                <Box src={logo} height={36} alt="Medify" component="img" mb={2} />
                <Stack direction="row" spacing={1.5}>
                  <Box component="img" src={fb} height={36} />
                  <Box component="img" src={twitter} height={36} />
                  <Box component="img" src={yt} height={36} />
                  <Box component="img" src={pinterest} height={36} />
                </Stack>
              </Stack>
            </Box>
  
            {/* Second Column */}
            <Box flexBasis={{ xs: "100%", md: "20.83%" }}>
              <Stack spacing={2}>
                <FooterLink>About Us</FooterLink>
                <FooterLink>Our Pricing</FooterLink>
                <FooterLink>Our Gallery</FooterLink>
                <FooterLink>Appointment</FooterLink>
                <FooterLink>Privacy Policy</FooterLink>
              </Stack>
            </Box>
  
            {/* Third Column */}
            <Box flexBasis={{ xs: "100%", md: "20.83%" }}>
              <Stack spacing={2}>
                <FooterLink>Orthology</FooterLink>
                <FooterLink>Neurology</FooterLink>
                <FooterLink>Dental Care</FooterLink>
                <FooterLink>Opthalmology</FooterLink>
                <FooterLink>Cardiology</FooterLink>
              </Stack>
            </Box>
  
            {/* Fourth Column */}
            <Box flexBasis={{ xs: "100%", md: "20.83%" }}>
              <Stack spacing={2}>
                <FooterLink>About Us</FooterLink>
                <FooterLink>Our Pricing</FooterLink>
                <FooterLink>Our Gallery</FooterLink>
                <FooterLink>Appointment</FooterLink>
                <FooterLink>Privacy Policy</FooterLink>
              </Stack>
            </Box>
          </Box>
  
          <Typography
            fontWeight={300}
            color="#fff"
            fontSize={14}
            pt={3}
            mt={5}
            borderTop="1px solid rgba(255,255,255,0.1)"
          >
            Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
          </Typography>
        </Container>
      </Box>
    );
  }
