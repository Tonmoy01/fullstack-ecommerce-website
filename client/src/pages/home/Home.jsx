import HomeBanner from '../../components/homeBanner/HomeBanner';
import banner1 from '../../assets/banner-box.jpg';
import banner2 from '../../assets/banner-box2.jpg';

const Home = () => {
  return (
    <>
      <HomeBanner />
      <section className='home-products'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='banner'>
                <img src={banner1} alt='' className='cursor' />
              </div>
            </div>
            <div className='col-md-9'>
              <div className='d-flex align-items-center'>
                <div className='info'>
                  <h3 className='text-lrg mb-0'>Best Sellers</h3>
                  <p className='text-light-dark text-sml mb-0'>
                    Do not miss the current offers until the end of March.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
