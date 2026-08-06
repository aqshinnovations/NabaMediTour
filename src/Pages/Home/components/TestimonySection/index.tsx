import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonials } from "./data";
import { styles } from "./style";
import IMCTypography from "../../../../components/IMCTypography";
import { commonStyles } from "../../../../constants/commonStyles";
import IMCBox from "../../../../components/IMCBox";
import { useTranslation } from "react-i18next";

const TestimonySection = () => {
  const { t, i18n } = useTranslation();
  return (
    <IMCBox>
      <Box sx={styles.container}>
        <IMCTypography variant="h3" style={commonStyles.sectionTitle}>
          {t("testimonials.title")}
        </IMCTypography>

        <Swiper
          key={i18n.language}
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <Box sx={styles.slide}>
                <Box
                  component="img"
                  src={item.image}
                  alt={`testimonial-${item.id}`}
                  sx={styles.image}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </IMCBox>
  );
};

export default TestimonySection;
