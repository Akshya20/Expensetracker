import { Box, Container, Typography, } from "@mui/material";
import Card1 from "../Card1/Cards";


function Blog1() {
    return (
        <Box py={6} width={1}>
            <Container maxWidth="xl">
                <Typography variant="h5" textAlign="center">
                    Blog & News
                </Typography>
                <Typography variant="h2" textAlign="center">
                    Read Our Latest News
                </Typography>
                <Box display="flex" gap={4}>
                    <box flex={1} sx={{xs:12,md:4}} >
                        <Card1 />
                    </box>
                    <box flex={1} sx={{xs:12,md:4}} >
                        <Card1 />
                    </box>
                    <box flex={1} sx={{xs:12,md:4}}>
                        <Card1 />
                    </box>
                </Box>
            </Container>
        </Box>
    );
}

export default Blog1;