import { FC, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { Box } from '@components/atoms';
import { ToolCard } from '@components/molecules';
import { getSkills } from '@services/index';
import 'swiper/css';

type SkillsSwiperProps = {};

const SkillsSwiper: FC<SkillsSwiperProps> = () => {
  const [sliders, setSleders] = useState([
    {
      'toolName': 'React',
      'toolMastery': '85%',
      'toolIcon': 'ReactIcon',
    },
    {
      'toolName': 'JS',
      'toolMastery': '85%',
      'toolIcon': 'JSIcon',
    },
    {
      'toolName': 'HTML',
      'toolMastery': '90%',
      'toolIcon': 'HTMLIcon',
    },
    {
      'toolName': 'NEXT.js',
      'toolMastery': '30%',
      'toolIcon': 'NextJSICon',
    },
    {
      'toolName': 'Formik',
      'toolMastery': '80%',
      'toolIcon': 'FormikIcon',
    },
    {
      'toolName': 'CSS',
      'toolMastery': '90%',
      'toolIcon': 'CssIcon',
    },
  ]);
  // useEffect(() => {
  //   (async () => {
  //     const { data } = await getSkills();
  //     setSleders(data);
  //   })();
  // }, []);
  return (
    <Box.Wrapper className=" px-8">
      <Swiper
        className="max-w-6xl"
        slidesPerView={1}
        spaceBetween={10}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        loop={true}
        breakpoints={{
          400: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
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
