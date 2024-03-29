import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Box } from "@components/atoms";
import { ToolCard } from "@components/molecules";
import "swiper/css";

const SkillsSwiper: FC = () => {
  const [sliders] = useState([
    {
      toolName: "React",
      toolMastery: "85%",
      toolIcon: "IconReact",
    },
    {
      toolName: "JS",
      toolMastery: "85%",
      toolIcon: "IconJS",
    },
    {
      toolName: "HTML",
      toolMastery: "90%",
      toolIcon: "IconHTML",
    },
    {
      toolName: "NEXT.js",
      toolMastery: "30%",
      toolIcon: "IconNextJS",
    },
    {
      toolName: "Formik",
      toolMastery: "80%",
      toolIcon: "IconFormik",
    },
    {
      toolName: "CSS",
      toolMastery: "90%",
      toolIcon: "IconCss",
    },
  ]);

  return (
    <Box.Wrapper>
      <Swiper
        className="max-w-6xl"
        slidesPerView={3}
        spaceBetween={10}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        loop={false}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
      >
        {sliders.map((slider: any, index) => {
          return (
            <SwiperSlide key={index} className="!flex-wrapper-center">
              <ToolCard
                name={slider.toolName}
                mastery={slider.toolMastery}
                typeToolIcon={slider.toolIcon}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box.Wrapper>
  );
};

export { SkillsSwiper };
