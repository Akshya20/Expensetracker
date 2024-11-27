import { Box, Container, Grid, Typography } from "@mui/material";
import banner from '../../Components/Images/family.png'

 function OurFamilies() {
    return (
        <Box pt={3} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
            <Container>
            <Box 
                    display="flex" 
                    flexDirection={{ xs: 'column', md: 'row' }} 
                    alignItems="center" 
                    gap={{ xs: 2, md: 10 }}
                >
                    {/* Text Section */}
                    <Box flex={1}>
                        <Typography fontWeight={600} color="primary.main">
                            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
                        </Typography>
                        <Typography variant="h2" mb={1}>
                            Our Families
                        </Typography>
                        <Typography color="#77829D" lineHeight={1.8}>
                            We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
                        </Typography>
                    </Box>

                    {/* Image Section */}
                    <Box flex={1} textAlign={{ xs: 'center', md: 'right' }}>
                        <Box
                            component="img"
                            src={banner}
                            width={1}
                            height="auto"
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default OurFamilies;