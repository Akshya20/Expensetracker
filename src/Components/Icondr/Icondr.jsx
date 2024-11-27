import { Stack, Box, Typography } from "@mui/material";



function Icon2({ img,
    title1,
    title2,
    bgColor,
}) {
    return (
        <Stack alignItems="center" py={4} >
          
            <Box
                sx={{
                    width: 400,
                    height: 500,
                    borderRadius: "180px 180px 0 0",
                     // Top-half hemisphere
                    overflow: "hidden",
                    backgroundColor: "#E0E0E0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img
                    src={img}
                    alt={title1}
                    style={{ width: "90%", height: "90%", objectFit: "cover",marginBottom:"0" }}
                />
            </Box>

           
            <Typography variant="h6" textAlign="center">
                {title1}
            </Typography>
            <Typography variant="body2" textAlign="center" color="text.secondary">
                {title2}
            </Typography>
        </Stack>
    );
}

export default Icon2;