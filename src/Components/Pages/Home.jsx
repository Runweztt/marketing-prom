

import React, { useEffect, useState } from 'react';
import './Home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
// import markme from '../../assets/markme.gif';
// import hospi from '../../assets/hospi.gif';
// import anmark from '../../assets/anmark.jpg';
// import auto1 from '../../assets/fint.gif';


// // Images
// import gemini01 from '../../assets/gemini01.png';
// import gemini02 from '../../assets/gemini02.png';
// import gemini03 from '../../assets/gemini03.png';
// import gemini04 from '../../assets/gemini04.png';
// import gemini05 from '../../assets/gemini05.png';
// import gemini06 from '../../assets/gemini06.png';
// import gemini07 from '../../assets/gemini07.png';

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const imagesContent = [
    {
      id: 'gemini1',
      image: gemini01,
      description: 'Real estate firm tripled leads with AI follow-ups and tracking.',
    },
    {
      id: 'gemini2',
      image: gemini02,
      description: 'Fashion brand cut waste and boosted ROAS using AI sales tools.',
    },
    {
      id: 'gemini3',
      image: gemini03,
      description: 'Fitness app grew 70% by automating onboarding and plans.',
    },
    {
      id: 'gemini4',
      image: gemini04,
      description: 'Edtech startup gained 15k users with AI chat and lessons.',
    },
    {
      id: 'gemini5',
      image: gemini05,
      description: 'Skincare brand boosted sales 4x with AI quizzes and support.',
    },
    {
      id: 'gemini6',
      image: gemini06,
      description: 'Logistics firm got 60% more leads via AI workflows.',
    },
    {
      id: 'gemini7',
      image: gemini07,
      description: 'Tech startup hit 7 figures using AI-powered outreach.',
    },
  ];
  const [color, setColor] = useState('linear-gradient(to right,rgb(248, 253, 255),rgb(47, 69, 111))');

  useEffect(() => {
    const handleColor = () => {
      if (window.scrollY >= 200) {
        setColor('linear-gradient(white, white)');
      } else {
        setColor('linear-gradient(to right,rgb(248, 253, 255),rgb(223, 225, 229))')
      }
    }
    window.addEventListener('scroll', handleColor);
    handleColor();
    return () => { window.removeEventListener('scroll', handleColor) }
  }, [])


  return (
    <>
      <div className="hero-container">
        <div className="hero-background" />

        <div className="hero" data-aos="fade-right">
          <h1>
            <span>Grow Smarter</span>, Not Harder.
          </h1>
          <p>
            Simple AI automation to manage tasks, track performance, and grow without stress.
          </p>
          <button className="button1" data-aos="zoom-in" data-aos-delay="1000">
            Get Started
          </button>
        </div>
      </div>



      <div className="logo-carousel" style={{ background: color }}>
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
          <div className='prod-content'>
            <img src={auto1} alt="tracker" />
            <div className="prod-text">
              <h2>Finance Tracker</h2>
              <p>Track income, expenses, and trends effortlessly with AI-powered insights that help small businesses stay ahead financially — no spreadsheets required.</p>
              <button className='button2'>Purchase</button>
            </div>
          </div>
        </div>

        <div className='product'>
          <div className='prod-content'>
            <img src={hospi} alt="tracker" />
            <div className="prod-text">
              <h2>AI Hospitality Management & Log Automation</h2>
              <p>Automate daily operations, manage staff logs, and improve guest experience with smart hospitality tools that save time and boost service quality.</p>
              <button className='button2'>Purchase</button>
            </div>
          </div>
        </div>
        <div className='product'>
          <div className='prod-content'>
            <img src={markme} alt="tracker" />
            <div className="prod-text">
              <h2>Web Development</h2>
              <p>Your website should work as hard as you do. That’s why we design clean, responsive sites that help small businesses connect, convert, and grow — all without the tech headaches.</p>
              <button className='button2'>Purchase</button>
            </div>
          </div>
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
          <img src={anmark} alt="AI-powered marketing graphic" />
        </div>
      </div>







    </>
  );
}

export default Home;
