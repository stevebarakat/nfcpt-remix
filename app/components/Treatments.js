import React from "react";
import { useLoaderData } from "remix";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay, Pagination } from "swiper";

// import "swiper/css";
// import "swiper/css/pagination";

const Treatments = ({ footerData }) => {
  console.log("footer data: ", footerData);
  return (
    <div className="treatmentsWrap">
      <div className="container">
        <h2 className="h2">Injuries & Conditions We Treat</h2>
        {/* <Swiper
          speed={750}
          spaceBetween={0}
          slidesPerView={4}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            570: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            690: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            980: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          {disorders.map((disorder, i) => {
            return (
              <SwiperSlide key={i}>
                <div className={styles.card}>
                  <span className={styles.cardHeader}>
                    {disorder.disorder.disorderName}
                  </span>
                  <div
                    style={{
                      position: "relative",
                      width: "200px",
                      height: "200px",
                    }}
                  >
                    <img
                      src={disorder.disorder.disorderImage.sourceUrl}
                      alt={disorder.disorder.disorderName}
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper> */}
      </div>
    </div>
  );
};

export default Treatments;
