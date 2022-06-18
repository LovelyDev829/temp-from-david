import { useState } from "react";
import { Link } from "react-router-dom";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";

import ProductFilterModal from "./ProductfilterModal";
import AllProductModal from "./AllproductModal";
import ProductNFTItem from "../../components/ProductNFTItem";
import { nftproducts } from "../../core/data/nftproducts";
import { productCategories } from "../../core/data/nftproducts";

import { ProductCategoryProps } from "../../core/interfaces/pages";

const MarketProducts = () => {
  const [filtermodalshow, setFiltermodalshow] = useState(false);
  const [allpmodalshow, setAllpmodalshow] = useState(false); // All product modal flag
  const [categoryshow, setCategoryshow] = useState(false); // the flag for dropdown categories
  const [currentcategory, setCurrentcategory] = useState(productCategories[0]);
  const hideCategoryShow = () =>{
    if (categoryshow)
      setCategoryshow(false);
  }
  const changeCategory = (item:ProductCategoryProps) => {
    setCurrentcategory(item);
    setFiltermodalshow(true);
  }
  return (
    <div className="mt-60" onClick={hideCategoryShow}>
        <div className="my-20">
          <div className="flex flex-wrap items-center justify-center uppercase text-45 leading-50 text-Rajdhani text-cloudygrey text-center pt-32 my-13">
            <span>select category</span>
            <span className="ml-5p text-darkMintGreen">grandora</span>
            <FontAwesomeIcon icon={faAngleDown} className="h-20 cursor-pointer ml-10 border border-white hover:border-davygrey" onClick={()=>setCategoryshow(true)}></FontAwesomeIcon>
            {
              categoryshow == true &&
              <div className="bg-default text-20 leading-25 tracking-10p cursor-pointer absolute top-140p right-[calc(50%-320px)] border-2">
                {
                  productCategories.map((item, index)=>{
                    return <div key={index} className="hover:text-texasRose border p-5p px-10p" onClick={()=>changeCategory(item)}>
                      {
                        // item.index == currentcategory.index &&
                        // <span className="text-texasRose">{item.type}</span>
                      }
                      {
                        // item.index != currentcategory.index &&
                        <span>{item.type}</span>
                      }
                    </div>;
                  })
                }
                <div key="ab" className="hover:text-texasRose border p-5p px-10p" onClick={()=>setAllpmodalshow(true)}>ALL PRODUCT</div>;
              </div>
            }
          </div>
          
          <div className="flex justify-center items-center">
            <FontAwesomeIcon icon={faSearch} className="relative left-30 h-20 cursor-pointer text-texasRose"></FontAwesomeIcon>
            <input className="h-36 w-500 rounded-default border border-cloud text-black indent-40 bg-white mr-5 " placeholder="SEARCH ITEM..."/>
          </div>
        </div>
        <div className="mx-100 flex flex-wrap justify-center">
          {
            nftproducts.map( (item, index) => {
              return <ProductNFTItem info={item} num={index} key={index} class=" rounded-np m-11" size="w-270"/>;
            })
          }
        </div>
        <ProductFilterModal show={filtermodalshow} onHide={()=> setFiltermodalshow(false)} item={currentcategory}></ProductFilterModal>
        <AllProductModal show={allpmodalshow} onHide={()=> setAllpmodalshow(false)}></AllProductModal>
    </div>
  );
}

export default MarketProducts;