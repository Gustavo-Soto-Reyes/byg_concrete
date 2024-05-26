import React from 'react';
import "./Home.css"
import CarouselComponent from './ImageCarousel';
import LocationMap from './LocationMap';
import Logo from './Logo';

const Home: React.FC = () => {
   const colors = ['#FF914D', '#868686', '#FFBF00', '#ffc107', '#9CF6F6'];

   const getRandomColor = () => {
     return colors[Math.floor(Math.random() * colors.length)];
   };
  return (
    <div className="home-page">
    <header>
      <div className='navbar'>
    <div className='Logo' style={{zIndex:1}}>
      <Logo size={100} /> {/* You can change the size prop to resize the logo */}
      </div>
    {/* </div> */}
      <h1>Bill and Gus Concrete</h1>
      <div className='social-icons'> 
      <a href='https://www.tiktok.com/@b_gconcrete?_t=8kegsN2mVA3&_r=1'>
      <div className='tiktok'>
      <i className="material-icons" >tiktok</i>      
      </div>
      </a>
      <a href='https://m.facebook.com/profile.php?id=100063658144976&mibextid=LQQJ4d'>
      <div className='facebook'>
  <i className="material-icons">facebook</i>
  </div>
  </a>
      </div>
      </div>     
    </header>
    <section className="business-info">
      <div className='intro'>
      <h2 >
        Hello we're Bill and Gus Concrete, your trusted family-owned concrete business serving Union County and the greater Charlotte Mecklenburg area. We specialize in crafting beautiful driveways and outdoor spaces with a blend of professionalism and warmth. From modern designs to timeless classics, we're committed to delivering exceptional service and turning your vision into reality.
        </h2>
      </div>
    </section>
    <section className="services">
      <h2>Our Services</h2>
      <ul className="services-list">
        <li className="service-item" style={{ backgroundColor: getRandomColor() }}>Driveway installation and repair</li>
        <li className="service-item" style={{ backgroundColor: getRandomColor() }}>Patio and walkway construction</li>
        <li className="service-item" style={{ backgroundColor: getRandomColor() }}>Concrete foundation pouring</li>
        <li className="service-item" style={{ backgroundColor: getRandomColor() }}>Stamped and decorative concrete work</li>
        <li className="service-item" style={{ backgroundColor: getRandomColor() }}>Concrete sealing and maintenance</li>
        <li className="service-item" style={{ backgroundColor: getRandomColor() }}>Concrete demolition and removal</li>
        <li className="service-item" style={{ backgroundColor: getRandomColor() }}>Concrete resurfacing and overlays</li>
        <li className="service-item" style={{ backgroundColor: getRandomColor() }}>Concrete staining and coloring</li>
        <li className="service-item" style={{ backgroundColor: getRandomColor() }}>Retaining wall installation</li>
        <li className="service-item" style={{ backgroundColor: getRandomColor() }}>Concrete slab pouring for various purposes</li>
      </ul>
    </section>
    <section className="contact-info">
      <h2>Contact Us</h2>
      <div className='contact-items'>
      <div className="contact-item">
          <i className="material-icons">location_on</i>
          <p>Monroe, NC</p>
        </div>
        <div className="contact-item">
          <i className="material-icons">email</i>
          <p>gustavotayum@gmail.com</p>
        </div>
        {/* <div className="contact-item">
          <i className="material-icons">phone</i>
          <p>+1234567890</p>
        </div> */}        
      </div>
    </section>
    <div className='map-container'>
    <div>
      <h3>
      We provide services in your area!
      </h3>
    </div>
      <div className='map'>
    <LocationMap/>
    </div>    
    <div className='locations'>
      <p>
      Charlotte, NC ◦ Monroe, NC  ◦ Wingate, NC ◦ Matthews, NC ◦ Gastonia, NC ◦ Indian Trail, NC ◦ Marshville, NC ◦ Lancaster, SC and surrounding areas
      </p>
    </div>
    </div>
    <section className="image-carousel">
      <h2>Gallery</h2>
      <CarouselComponent />
    </section>
    <footer>
      <p>&copy; 2024 Bill and Gus Concrete. All rights reserved.</p>
    </footer>
  </div>
  );
};

export default Home;
