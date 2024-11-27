import { Box, Container } from "@mui/material";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import img1 from "../../Components/Images/image1.png";
import img2 from "../../Components/Images/image2.png";


function Offer1() {
    return (
        <Box py={6} >
            <Container maxWidth='xll'>
            <Swiper
                slidesPerView={1}
                modules={[Pagination]}
                spaceBetween={30}
                pagination={{
                    clickable: true
                }}
                breakpoints={
                    {
                        767: {
                            slidesPerView: 3
                        }
                    }
                }
            >
                <SwiperSlide>
                    <Box component={'img'} src={img1} />
                </SwiperSlide>
                <SwiperSlide>
                    <Box component={'img'} src={img2} />
                </SwiperSlide>
                <SwiperSlide>
                    <Box component={'img'} src={img1} />
                </SwiperSlide>
                <SwiperSlide>
                    <Box component={'img'} src={img2} />
                </SwiperSlide>
                <SwiperSlide>
                    <Box component={'img'} src={img1} />
                </SwiperSlide>
                <SwiperSlide>
                    <Box component={'img'} src={img2} />
                </SwiperSlide>

            </Swiper>
            </Container>
        </Box>
    );
}

export default Offer1;