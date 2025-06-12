

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
      description: 'Real estate firm tripled leads with AI follow-ups and tracking.',
    },
    {
      id: 'gemini2',
      image: Gemini02,
      description: 'Fashion brand cut waste and boosted ROAS using AI sales tools.',
    },
    {
      id: 'gemini3',
      image: Gemini03,
      description: 'Fitness app grew 70% by automating onboarding and plans.',
    },
    {
      id: 'gemini4',
      image: Gemini04,
      description: 'Edtech startup gained 15k users with AI chat and lessons.',
    },
    {
      id: 'gemini5',
      image: Gemini05,
      description: 'Skincare brand boosted sales 4x with AI quizzes and support.',
    },
    {
      id: 'gemini6',
      image: Gemini06,
      description: 'Logistics firm got 60% more leads via AI workflows.',
    },
    {
      id: 'gemini7',
      image: Gemini07,
      description: 'Tech startup hit 7 figures using AI-powered outreach.',
    },
  ];
  const [color, setColor] = useState('linear-gradient(to right,rgb(248, 253, 255),rgb(47, 69, 111))'); 

   useEffect(()=>{
      const handleColor = ()=>{
        if (window.scrollY >= 200){
         setColor('linear-gradient(white, white)');
        }else{
          setColor('linear-gradient(to right,rgb(248, 253, 255),rgb(223, 225, 229))')
        }
      }
      window.addEventListener('scroll',handleColor);
      handleColor();
      return ()=>{window.removeEventListener('scroll',handleColor)}
   },[])


  return (
    <>
      <div className="container">
        <div className="hero" data-aos="fade-right">
          <h1>
            <span>Grow Smarter</span>, Not Harder.
          </h1>
          <p>
            Simple AI automation to manage tasks, track performance, and grow without stress.
          </p>
          <button className='button1' data-aos="zoom-in" data-aos-delay="1000">
            Get Started
          </button>
        </div>
      </div>

      <div className="logo-carousel"style={{background:color}}>
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



     







      <div className='container2'>
        <div className='content'>

          <div className='content-text'>
            <h1>Core Services</h1>

            <div className="service-grid">
              <div>
                <span>AI-Powered Marketing</span>
                <p>Automate and optimise your campaigns with AI—get more leads with less effort.</p>
              </div>
              <div>
                <span> Web Development</span>
                <p>Smart, responsive websites built with AI to adapt, convert, and scale with your business.</p>
              </div>
              <div>
                <span>AI Automation Systems</span>
                <p>From task scheduling to customer follow-ups—let AI handle the busywork for you.</p>
              </div>
              <div>
                <span>Real-Time Data & Insights</span>
                <p>Know what’s working instantly with live dashboards powered by AI-driven analytics.</p>
              </div>
            </div>
          </div>


        </div>
      </div>




      <div className='container3'>
        <div className='product'>

        </div>
        <div className='product'>

        </div>
        <div className='product'>

        </div>
        <div className='product'>

        </div>

      </div>








       <div className='Container1'>
        <div className='main1' data-aos="zoom-in" data-aos-delay="2000">
          <h2>Smart AI Marketing for Small Business Growth</h2>

          <p>Running a business is hard—your marketing shouldn't be. We use AI to turn your traffic into leads, your content into conversions, and your time into results.</p>

          <button className='btn'>
            Build My Growth Plan
          </button>
        </div>

        <div className='main1' data-aos="zoom-in" data-aos-delay="800">
          <img src={markme1} alt="AI-powered marketing graphic" />
        </div>
      </div>
           






    </>
  );
}

export default Home;
