import { Box, Container } from "@mui/material";
import { Pagination } from 'swiper/modules';
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { useMemo } from "react";
import "swiper/css/pagination";
import pick1 from "../../Components/Images/dr1.png";
import pick2 from "../../Components/Images/heena.png";
import pick3 from "../../Components/Images/dr4.png";
import Icon2 from "../Icondr/Icondr";

function Doctor1() {
    const Data1 = useMemo(() => 
        [{ img: pick1, title1: "Dr.Ahmad Khan", title2:"Neurologist" },
        { img: pick2, title1: "Dr.Hina Sachdeva", title2: "Orthopadics" },
        { img: pick3, title1: "Dr.Ankur Sharma", title2: "Medicine"},
        { img: pick1, title1: "Dr.Ahmad Khan", title2: "Neurologist" },
        { img: pick2, title1: "Dr.Hina Sachdeva", title2: "Orthopadics" },
        { img: pick3, title1: "Dr.Ankur Sharma", title2: "Medicine" },
        { img: pick1, title1: "Dr.Ahmad Khan", title2: "Neurologist" },
        { img: pick2, title1: "Dr.Hina Sachdeva", title2: "Orthopadics" },
        { img: pick3, title1: "Dr.Ankur Sharma", title2: "Medicine" }
        ],[]
    );
    return (
        <Box py={6}>
            <Container maxWidth="xl">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000 }}
                    loop
                    spaceBetween={100} // Adds 20px gap between slides
                    slidesPerView={3}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={
                        {
                            clickable: true
                        }
                    }
                    
                >
                    {
                        Data1.map((Data) => (
                            <SwiperSlide key={Data.title1}>
                                <Icon2
                                 img={Data.img}
                                 title1={Data.title1}
                                 title2={Data.title2}
                                 bgColor="lightblue"
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Container>
        </Box>
    );
}

export default Doctor1;