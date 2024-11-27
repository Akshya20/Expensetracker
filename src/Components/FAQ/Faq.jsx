import { Box, Container, Grid, Typography } from "@mui/material";
import faqBanner from '../../Components/Images/faq.png'
import CustomizedAccordions from "../../Components/Accord/Accord";

 function FAQs() {

    const faqs = [
        {
            question: 'Why choose our medical for your family?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'Why we are different from others?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'Trusted & experience senior care & love',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'How to get appointment for emergency cases?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        }
    ]

    return (
        <Box py={4}>
            <Container maxWidth='xl'>
                <Typography color='primary.main' fontWeight={600} textAlign='center'>
                    Get Your Answer
                </Typography>
                <Typography textAlign='center' variant='h2' mb={2}>
                    Frequently Asked Questions
                </Typography>
                <Box py={6}>
            <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                alignItems="center"
                gap={5} // Replaces the spacing prop
            >
                {/* Image Section */}
                <Box
                    flex={1}
                    component="img"
                    src={faqBanner}
                    width={1}
                    height="auto"
                />

                {/* Accordion Section */}
                <Box flex={1} display="flex" justifyContent="center">
                    <Box maxWidth={450} width={1}>
                        <CustomizedAccordions data={faqs} />
                    </Box>
                </Box>
            </Box>
        </Box>
            </Container>
        </Box>
    )
}

export default FAQs;