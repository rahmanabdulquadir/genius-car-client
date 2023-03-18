import React from 'react';
import './BannerItem.css'

const BannerItem = ({slide}) => {
  const {image, id, next, prev} = slide
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="carousal-img">
          <img src={image} alt="" className="w-full rounded-lg" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h1 className="text-5xl font-bold text-white ">
            Affordable <br />
            Price for Car <br />
            Servicing
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-2/4">
          <p className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            quia provident! Pariatur quibusdam quod repellat accusamus minima
            repellendus earum magni temporibus, cum in blanditiis corporis.
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
          <button className="btn btn-warning mr-5">Warning</button>
          <button className="btn btn-outline btn-warning">Warning</button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${prev}`} className="btn btn-circle mr-5">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
  );
};

export default BannerItem;