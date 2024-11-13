import React, { useState } from 'react';
import './css/news.css'; 
import event1 from './images/event1.jpg';
import event2 from './images/event2.jpg';
import event3 from './images/event3.jpg';
import news1 from './images/news1.jpg';
const NewsPage = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      img: event1,
      text: 'How Cyber Security is Evolving',
    },
    {
      img: event2,
      text: 'AI in Healthcare: A New Era',
    },
    {
      img: event3,
      text: 'Machine Learning for Beginners',
    },
  ];

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => (prevIndex + n + slides.length) % slides.length);
  };

  return (
    <div>
      <header>
        <h1 className='gradient-text'>Top News Today</h1>
      </header>

      {/* Main News Article */}
      <section className="main-article">
        <p className="gradient-text x"  >Breaking News: AI Transforms Tech Industry</p>
        <img src={news1} alt="Main News" className="article-img" />
        <p className="article-author">By Jane Doe | Sept 5, 2024</p>
        <p className="article-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <section className="recommended-news">
        <h2>Recommended for You</h2>
        <div className="slider-container">
          <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
          <div className="slider">
            {slides.map((slide, index) => (
              <div className="slide" key={index}>
                <img src={slide.img} alt={`Recommended News ${index + 1}`} />
                <p>{slide.text}</p>
              </div>
            ))}
          </div>
          <button className="next" onClick={() => plusSlides(1)}>&#10095;</button>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 News Page | Stay Informed</p>
      </footer>
    </div>
  );
};

export default NewsPage;
