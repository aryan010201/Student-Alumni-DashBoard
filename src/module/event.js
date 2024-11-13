import React, { useEffect, useState } from 'react';
import './css/event.css';
import event1 from './images/event1.jpg';
import event2 from './images/event2.jpg';
import event3 from './images/event3.jpg';

const EventPage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState('');

  const slides = [
    {
      img: event1,
      title: 'Data Science Workshop',
      description: 'Learn data science fundamentals from experts',
    },
    {
      img: event2,
      title: 'Cyber Security Bootcamp',
      description: 'Get hands-on experience in cyber security',
    },
    {
      img: event3,
      title: 'AI/ML Conference',
      description: 'Explore the future of AI with industry leaders',
    },
  ];

  
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, [slides.length]);

  
  const plusSlides = (n) => {
    setSlideIndex((prev) => {
      let newIndex = prev + n;
      if (newIndex >= slides.length) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = slides.length - 1;
      }
      return newIndex;
    });
  };

 
  useEffect(() => {
    const countdown = () => {
      const eventDate = new Date('September 10, 2024 10:00:00').getTime();
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        setTimeLeft('Event Started!');
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const intervalId = setInterval(countdown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      
        <div className="hero">
          <h1 className='gradient-text'>Upcoming Events</h1>
          <p className='gradient-text'>Stay updated with the latest events</p>
        </div>
      

      <section className="featured-event">
        <div className="event-banner">
          <h2>Featured Event</h2>
          <p>Join us for a special webinar on AI and Machine Learning</p>
          <button className="register-btn">Register Now</button>
          <div className="countdown">
            <p>Event starts in: <span id="countdown-timer">{timeLeft}</span></p>
          </div>
        </div>
      </section>

      <section className="slider-container">
        <div className="slider" style={{ transform: `translateX(${-slideIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide.img} alt={slide.title} />
              <div className="caption">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
        <button className="next" onClick={() => plusSlides(1)}>&#10095;</button>
      </section>

      <footer>
        <p>2024 Event Page | Stay connected with upcoming events</p>
      </footer>
    </div>
  );
};

export default EventPage;
