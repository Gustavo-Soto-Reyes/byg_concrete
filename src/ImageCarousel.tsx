import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./ImageCarousel.css"

const imageNames = [
    'IMG_6904.JPG',
    'IMG_6908.JPG',
    'IMG_6887.JPG',
    'IMG_6888.JPG',
    'IMG_6890.JPG',
    'IMG_6891.JPG',
    'IMG_6892.JPG',
    'IMG_6893.JPG',
    'IMG_6894.JPG',
    'IMG_6895.JPG',
    'IMG_6896.JPG',
    'IMG_6897.JPG',
    'IMG_6898.JPG',
  ];

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
    <Carousel dynamicHeight={false} autoPlay infiniteLoop showThumbs={false} showArrows={true} >
       {imageNames.map((imageName, index) => (
        <div key={index}>
          <img src={`${imageName}`} alt={`Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      ))}
    </Carousel>
    </div>
  );
};

export default CarouselComponent;
