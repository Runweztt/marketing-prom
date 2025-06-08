import React, {useEffect} from 'react'
import './Home.css'
import video from "../../assets/vidmark.mp4"
import markimg from "../../assets/mark4.jpg"
import Aos from "aos";
import "aos/dist/aos.css";



function Home() {
     useEffect(()=>{
        Aos.init({ duration: 1000})
    });
  return (

    <> 

  
        <div className="container">
          <div className="hero"data-aos="fade-right">
            <h1><span>Grow Smarter</span>, Not Harder.</h1>
            <p>Data-driven digital marketing strategies that help small businesses thrive online.</p>
            <button data-aos="zoom-in"  data-aos-delay="1000">
              Book Your Free Consultation</button>
          </div>
    
        </div>
        
   

    
      
    
    
    </>
  )
}

export default Home