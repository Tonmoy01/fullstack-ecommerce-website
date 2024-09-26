import HomeBanner from '../../components/homeBanner/HomeBanner';
import banner1 from '../../assets/banner-box1.png';
import { Button } from '@mui/material';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import ProductItem from '../../components/productItem/ProductItem';

const Home = () => {
  return (
    <>
      <HomeBanner />
      <section className='home-products'>
        <div className='container'>
          <div className='row'>
            {/* Banner Section */}
            <div className='col-md-3'>
              <div className='banner'>
                <img src={banner1} alt='' className='cursor w-100' />
              </div>
            </div>

            {/* Products Section */}
            <div className='col-md-9 product-row-section'>
              <div className='d-flex align-items-center'>
                <div className='info w-75'>
                  <h3 className='text-lrg mb-0'>Best Sellers</h3>
                  <p className='text-light-dark text-sml mb-0'>
                    Do not miss the current offers until the end of March.
                  </p>
                </div>

                <Button className='view-all-btn ml-auto'>
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>

              {/* Product Row Slider */}
              <div className='product-row w-100 mt-4'>
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className='mySwiper'
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className='d-flex align-items-center mt-5'>
                <div className='info w-75'>
                  <h3 className='text-lrg mb-0'>New Products</h3>
                  <p className='text-light-dark text-sml mb-0'>
                    New products with updated stocks.
                  </p>
                </div>

                <Button className='view-all-btn ml-auto'>
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>

              {/* Product Row Slider */}
              <div className='product-row w-100 mt-4'>
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className='mySwiper'
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
