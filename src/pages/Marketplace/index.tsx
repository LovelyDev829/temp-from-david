import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";

import $ from 'jquery';

import "react-multi-carousel/lib/styles.css";

import image1 from "../../assets/images/marketplace/slide1.png";
import image2 from "../../assets/images/marketplace/slide2.png";
import image3 from "../../assets/images/marketplace/slide3.png";
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};
const slideImages:any = [image1, image2, image3];
const Marketplace = () =>{

    return (
        <div className="mt-60" id="marketplace-container">
          <p className="text-45 uppercase leading-50 tracking-3p pt-34p text-center text-texasRose">Market <span className="text-davygrey">place</span></p>
          <p className="text-16 leading-20 tracking-10 text-center">drag to see all category</p>
          <div className="mx-auto w-1000 max-w-1000 my-50p min-h-400 my-auto">
            <Carousel responsive={responsive} infinite>
              {
              slideImages.map( (item:any, index:number) => {
                  return <Link to="mproduct" key={index}><img src={item} className="w-300 h-300"/></Link>;
              })
              }
            </Carousel>
          </div>
        </div>
    );
};
export default Marketplace;

$(document).ready(function(){
    $(".react-multi-carousel-item--active img").eq(1).css( "transform", "translate3d(0px, 0px, 100px) rotateX(0deg) rotateY(50deg) scale(1)");
    // $(".react-multi-carousel-item--active img").eq(2).css( "transform", "rotateY(-45deg)");
});