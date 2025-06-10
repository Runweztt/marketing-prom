

import React, { useEffect, useState } from 'react';
import './Home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import markme1 from '../../assets/Markme1.gif';
import mark5 from '../../assets/Mark5.jpg';

// Images
import Gemini01 from '../../assets/Gemini01.png';
import Gemini02 from '../../assets/Gemini02.png';
import Gemini03 from '../../assets/Gemini03.png';
import Gemini04 from '../../assets/Gemini04.png';
import Gemini05 from '../../assets/Gemini05.png';
import Gemini06 from '../../assets/Gemini06.png';
import Gemini07 from '../../assets/Gemini07.png';

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const imagesContent = [
    {
      id: 'gemini1',
      image: Gemini01,
      description:
        'Mark & Don, a real estate leader, experienced a 10% to 200% revenue leap in just one year through our data-driven marketing strategy.',
    },
    {
      id: 'gemini2',
      image: Gemini02,
      description:
        'A struggling online fashion brand was repositioned with performance ads and influencer strategy — resulting in a 3x ROAS within 6 months.',
    },
    {
      id: 'gemini3',
      image: Gemini03,
      description:
        'We helped a local fitness app scale nationally by optimising user funnels, leading to a 70% boost in subscriptions.',
    },
    {
      id: 'gemini4',
      image: Gemini04,
      description:
        'An e-learning startup hit 15k active users in 90 days after we refined their ad copy and launched a targeted social campaign.',
    },
    {
      id: 'gemini5',
      image: Gemini05,
      description:
        'A boutique skincare brand saw a 400% surge in Shopify sales post-launch — all thanks to strategic email flows and retargeting ads.',
    },
    {
      id: 'gemini6',
      image: Gemini06,
      description:
        'We helped a logistics firm improve B2B lead gen by 60% through a LinkedIn content system paired with outbound email strategy.',
    },
    {
      id: 'gemini7',
      image: Gemini07,
      description:
        'A tech hardware startup crossed its first 7-figure quarter after our campaign repositioned their product to the enterprise market.',
    },
  ];


  return (
    <>
      <div className="container">
        <div className="hero" data-aos="fade-right">
          <h1>
            <span>Grow Smarter</span>, Not Harder.
          </h1>
          <p>
            We’re Zone Marketing—a data-driven digital agency helping ambitious small businesses attract more customers,
            generate more leads, and grow confidently online
          </p>
          <button data-aos="zoom-in" data-aos-delay="1000">
            Book Your Free Consultation
          </button>
        </div>
      </div>

      <div className="logo-carousel">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          speed={900}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {imagesContent.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="carousel-item">
                <img src={item.image} alt={item.id} />
                <p>{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>



      <div className='Container1'>
        <div className='main1' data-aos="zoom-in" data-aos-delay="2000">
          <h2>Marketing That Works as Hard as You Do</h2>

          <p>Running a small business is tough. Between juggling customers, managing operations,
            and planning for growth, you need marketing that delivers—not drains your time or budget. That’s where we come in.
            At Zone Marketing, we turn data into strategy, clicks into customers, and content into conversions.</p>

          <button className='btn'>
            Let’s Build Your Growth Strategy</button>

        </div>
        <div className='main1' data-aos="zoom-in" data-aos-delay="800">
          <img src={markme1} alt="markme1" />

        </div>
      </div>






      <div className='container2'>
        <div className='content'>




          <div className='content-text'>
            <h1>Core Services</h1>

            <div className="service-grid">
              <div>
                <span>Paid Ads Management </span>
                <p>Maximise Your Budget, Minimise Your Worry...</p>
              </div>
              <div>
                <span>Social Media Marketing</span>
                <p>Reach Your Audience Where They Hang Out...</p>
              </div>
              <div>
                <span>SEO Services</span>
                <p>Rank Higher. Get Found. Grow Organically.</p>
              </div>
              <div>
                <span>Analytics & Reporting</span>
                <p>Know What Works, Drop What Doesn’t...</p>
              </div>
            </div>
          </div>



          <div className='content-image'>
            <img src={mark5} alt="content" />
          </div>



        </div>
      </div>





    </>
  );
}

export default Home;
