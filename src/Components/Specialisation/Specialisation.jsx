import { Box, Button, Container, Typography } from "@mui/material";
import Dentist from "../../Components/Images/dentist.png";
import cardio from "../../Components/Images/cardio.png";
import Blood from "../../Components/Images/blood.png";
import lab from "../../Components/Images/lab.png";
import mri from "../../Components/Images/mri.png";
import pisco from "../../Components/Images/pisco.png";
import primary from "../../Components/Images/primary.png";
import xray from "../../Components/Images/Xray.png";
import { useMemo } from "react";
import Icon1 from "../../Components/Iconcard/Iconcard";




function Iconhero1() {
    const Icons = useMemo(() =>
        [{ img: Dentist, title: "Dentist" },
        { img: cardio, title: "Cardiology" },
        { img: Blood, title: "Blood Test" },
        { img: lab, title: "Laboratory" },
        { img: mri, title: "MRI Resonance" },
        { img: pisco, title: "Piscologist" },
        { img: primary, title: "Primary Care" },
        { img: xray, title: "X-Ray" }

        ], []
    );
    return (
        <Box  height="900px" justifyContent="center" alignContent="center" sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
            <Typography
                variant="h5"
                component="h5"
                sx={{
                    fontSize: "70px", // Explicit size in px or rem
                    fontWeight: "600 !important",
                    color: "#102851",
                    textAlign: "center",
                    marginBottom: 10,
                }}
            >
                Find by specialisation
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                flexWrap="wrap"
                gap={4} // For spacing between items
               
            >
                {Icons.map((Icon) => (
                    <Box
                        key={Icon.title}
                        flexBasis={{ xs: "30%", md: "18%" }} // Responsive width
                        bgcolor="#FAFBFE" // Background color
                        p={2} // Padding for spacing inside the item
                        borderRadius={2}
                        
                    >
                        <Icon1
                            img={Icon.img}
                            title={Icon.title}
                            active={Icon.active || false}
                            bgColor="#FAFBFE"
                        />
                    </Box>
                ))}
            </Box >
            <Button variant="contained" size="large" sx={{marginTop:'20px',marginLeft:'891px'}}> View all </Button>
        </Box>
    );
}

export default Iconhero1;