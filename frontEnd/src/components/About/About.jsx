import React from 'react';
import aboutImg from '../../assets/images/about11.png';
import aboutCardImg from '../../assets/images/about-card1.jpg';
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/*========About img======*/}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} />
            <div className="absolute z-30 bottom-4 w-[200px] md:w-[300px] right-[-40%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
