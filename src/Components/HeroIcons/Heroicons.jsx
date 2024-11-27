import { Box, Container, Typography } from "@mui/material";
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




function Iconhero() {
    const Icons = useMemo(() =>
        [{ img: Dentist, title: "Dentist" },
        { img: cardio, title: "Cardiology" },
        { img: Blood, title: "Blood Test" },
        { img: lab, title: "Laboratory" },
        { img: mri, title: "MRI Resonance" },
       

        ], []
    );
    return (
        <Box  >
            <Typography component="h4" variant="h4" fontSize={30}
                color="#102851"
                fontWeight={500}
                textAlign="center"
                mb={2}>
                You may be looking for
            </Typography>
            <Box
                display="flex"
                flexWrap="wrap"
                gap={2} // For spacing between items
            >
                {Icons.map((Icon) => (
                    <Box
                        key={Icon.title}
                        flexBasis={{ xs: "30%", md: "15%" }}
                         // Responsive width
                        bgcolor="#FAFBFE" // Background color
                        p={2} // Padding for spacing inside the item
                        justifyContent='center'
                        textAlign="center" // Center alignment
                    >
                        <Icon1
                            img={Icon.img}
                            title={Icon.title}
                            active={Icon.active || false}
                            bgColor="#FAFBFE"
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default Iconhero;