import M from "materialize-css";
import React, { useEffect } from 'react';
import banner from '../Assets/img/statics_Banner.jpg'
const Carrusel = () => {

  useEffect(() => {
    const carousel = document.querySelectorAll('.carousel');
    const instances = M.Carousel.init(carousel, {
      fullWidth: true,
      indicators: true

    });

  })
  return (
    <div>
      <div class="carousel carousel-slider center">
        <div class="carousel-fixed-item center">
        </div>
        <div class="carousel-item white white-text" href="#one!">
          <img src={banner} alt=""></img> <h2></h2>
        </div>
      </div>


    </div>

  );
};
export default Carrusel;