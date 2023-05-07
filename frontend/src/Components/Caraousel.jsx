import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Image } from "@chakra-ui/react";
const images = [
	"https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/AppBanner/Offer/03/Desktop_1920x694.webp",
    "https://cdn.caratlane.com/media/static/images/V4/2023/CL/04-APR/AppBanner/Digigold/02/Desktop_1920x694.webp",
    "https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Page/01/Desktop_2X.webp",
	"https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/AppBanner/Offer/03/Desktop_1920x694.webp",
    "https://cdn.caratlane.com/media/static/images/V4/2023/CL/04-APR/AppBanner/Digigold/02/Desktop_1920x694.webp",
    "https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Page/01/Desktop_2X.webp",
];

const Caraousel = ({ src = images }) => {
	return (
		<div width="100vw">
			<Swiper
				modules={[Navigation, Pagination,Autoplay]}
				navigation={true}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
        autoplay={{
          "delay": 2500,
          "disableOnInteraction": false
        }}
				style={{
					width: "100%",
					height: "100%",
					"--swiper-navigation-color": "#ffffff",
					"--swiper-navigation-size": "2rem",
					"--swiper-pagination-color": "#ffffff",
				}}
				loop={true}>
				{src.map((item, index) => {
					return (
						<SwiperSlide key={index}>
							<Image src={item} alt={item} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Caraousel;