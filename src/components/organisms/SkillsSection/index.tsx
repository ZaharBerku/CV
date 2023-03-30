import type { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@components/atoms';
import { SectionTitle, ToolCard } from '@components/molecules';

type SkillsSectionProps = {};

const SkillsSection: FC<SkillsSectionProps> = () => {
  return (
    <Box.Container>
      <SectionTitle title="My skills" />
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <ToolCard name={'React'} mastery={'85%'} typeToolIcon={'ReactIcon'} />
        </SwiperSlide>
        <SwiperSlide>
          <ToolCard name={'React'} mastery={'85%'} typeToolIcon={'ReactIcon'} />
        </SwiperSlide>
        <SwiperSlide>
          <ToolCard name={'React'} mastery={'85%'} typeToolIcon={'ReactIcon'} />
        </SwiperSlide>
        <SwiperSlide>
          <ToolCard name={'React'} mastery={'85%'} typeToolIcon={'ReactIcon'} />
        </SwiperSlide>
        <SwiperSlide>
          <ToolCard name={'React'} mastery={'85%'} typeToolIcon={'ReactIcon'} />
        </SwiperSlide>
        <SwiperSlide>
          <ToolCard name={'React'} mastery={'85%'} typeToolIcon={'ReactIcon'} />
        </SwiperSlide>
        <SwiperSlide>
          <ToolCard name={'React'} mastery={'85%'} typeToolIcon={'ReactIcon'} />
        </SwiperSlide>
        <SwiperSlide>
          <ToolCard name={'React'} mastery={'85%'} typeToolIcon={'ReactIcon'} />
        </SwiperSlide>
      </Swiper>
    </Box.Container>
  );
};

export { SkillsSection };
