import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";

import $ from 'jquery';
import { ProductSlides } from "../../core/data/product";
import "react-multi-carousel/lib/styles.css";
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
const Products = () =>{

    return (
        <div className="mt-60" id="marketplace-container uppercase">
          <p className="text-45 uppercase leading-50 tracking-3p pt-34p text-center text-texasRose">product</p>
          <p className="text-16 leading-20 tracking-10 text-center">our product <span className="font-semibold">from grandora</span></p>
          <div className="mx-auto w-1000 max-w-1000 my-50">
            <Carousel responsive={responsive} infinite>
              {
              ProductSlides.map( (item:any, index:number) => {
                  return <Link to={"detail/:"+index} key={index}><img src={item.img} className="w-300 h-300 mx-10p"/></Link>;
              })
              }
            </Carousel>
          </div>
        </div>
    );
};
export default Products;

$(document).ready(function(){
    // $(".react-multi-carousel-item--active img").eq(2).css( "transform", "rotateY(-45deg)");
    // $(".react-multi-carousel-item--active img").eq(2).css( "transform", "rotateY(-45deg)");
});