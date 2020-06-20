import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react';
import peterArt1 from '../../images/peterArt/peterArt1.jpg';
import peterArt2 from '../../images/peterArt/peterArt2.jpg';
import peterArt3 from '../../images/peterArt/peterArt3.jpg';
import peterArt4 from '../../images/peterArt/peterArt4.jpg';
import peterArt5 from '../../images/peterArt/peterArt5.jpg';
import peterArt6 from '../../images/peterArt/peterArt6.jpg';
import peterArt7 from '../../images/peterArt/peterArt7.jpg';
import peterArt8 from '../../images/peterArt/peterArt8.jpg';
import peterArt9 from '../../images/peterArt/peterArt9.jpg';
import peterArt10 from '../../images/peterArt/peterArt10.jpg';
import peterArt11 from '../../images/peterArt/peterArt11.jpg';
import peterArt12 from '../../images/peterArt/peterArt12.jpg';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>

        <Carousel.Item>
            <img className="d-block w-100" src={peterArt1} alt={peterArt1} />
        </Carousel.Item>
        
        <Carousel.Item>
            <img className="d-block w-100" src={peterArt2} alt={peterArt2} />
        </Carousel.Item>

        <Carousel.Item>
        <img className="d-block w-100" src={peterArt3} alt={peterArt3} />
        </Carousel.Item>
        
        <Carousel.Item>
        <img className="d-block w-100" src={peterArt4} alt={peterArt4} />
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={peterArt5} alt={peterArt5} />
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={peterArt6} alt={peterArt6} />
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={peterArt7} alt={peterArt7} />
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={peterArt8} alt={peterArt8} />
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={peterArt9} alt={peterArt9} />
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={peterArt10} alt={peterArt10} />
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={peterArt11} alt={peterArt11} />
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={peterArt12} alt={peterArt12} />
        </Carousel.Item>

      </Carousel>
    );
  }

export default ControlledCarousel;