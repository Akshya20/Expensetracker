import Nav from "../../Components/Navbar/Navbar"
import Hero1 from "../../Components/Hero/hero"
import Srch from "../../Components/Searchero/search"
import Iconhero from "../../Components/HeroIcons/Heroicons";
import { Box, Container, Stack } from "@mui/material";
import Offer1 from "../../Components/Swipeoffer/Carousel";
import Iconhero1 from "../../Components/Specialisation/Specialisation";
import Doctor1 from "../../Components/Doctors/doctors";
import PatientCaring from "../../Components/Patientcaring/Patientcaring";
import Blog1 from "../../Components/Blogs/Blogs";
import Ourfamilies from "../../Components/Ourfam/Ourfam"
import FAQs from "../../Components/FAQ/Faq";
import Footer from "../../Components/Footter/Footer";
import DownloadApp from "../../Components/Downloadapp/Downloadapp"


function Home1() {
    return (
       <Box>
            
            <Nav />

            <Container maxWidth="xl">
                <Hero1 />
                <Stack
                   p={{ xs: 2.5, md: 8 }}
                   mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
                   position="relative"
                   zIndex={99}
                   bgcolor="#fff"
                   borderRadius="15px"
                   spacing={10}
                   boxShadow="0 0 12px rgba(0,0,0,0.1)"
                >
                    <Srch />
                    <Iconhero />
                </Stack>
            </Container>
            <Offer1 />
            <Iconhero1 />
            <Doctor1 />
            <PatientCaring />
            <Blog1 />
            <Ourfamilies />
            <FAQs />
            <DownloadApp />
            <Footer />
        </Box>
    );
}

export default Home1;