import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCaretRight, faSearch } from "@fortawesome/free-solid-svg-icons";

import InventoryItem from "./inventoryproduct";
import { NftProductsProps } from "../../core/interfaces/pages";
import { nftproducts } from "../../core/data/nftproducts";
import ProductInfoModal from "./productInfoModal";

const UserInventory = () => {
  
  const [showDetail, setShowDetail] = useState(false);
  const [currentItem, setCurrentItem] = useState(nftproducts[0]);
  const onClickProduct = (item:NftProductsProps) =>{
    setCurrentItem(item);
    setShowDetail(true);
    console.log("asdf");
  }
  const activeStyle = 'text-default bg-texasRose px-20p py-3p h-30p text-10 tracking-10p text-center rounded-default mx-13p';
  const deactiveStyle = 'text-friarGrey bg-texasRose bg-opacity-10 px-20p py-3p h-30p text-10 tracking-10p text-center rounded-default mx-13p';
  return (
    <div className="mt-60p md:mx-110p">
      <div className="uppercase text-25 font-semibold text-davygrey tracking-15p">
        <FontAwesomeIcon icon={faCaretRight} className="text-texasRose mr-5p"/>
        MY <span className="text-texasRose">INVENTORY</span>
      </div>
      <div className="flex justify-between">
        <div>
          <span className="text-texasRose">SHOW : </span>
          <button className={activeStyle}>ALL</button>
          <button className={deactiveStyle}>GAME</button>
          <button className={deactiveStyle}>PRODUCT</button>
        </div>
        <div className="flex justify-center items-center">
          <FontAwesomeIcon icon={faSearch} className="relative left-30 h-20 cursor-pointer text-texasRose"></FontAwesomeIcon>
          <input className="h-36 w-500 rounded-default border border-cloud text-black indent-40 bg-white mr-5 " placeholder="SEARCH ITEM..."/>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center uppercase text-25 leading-32 text-Rajdhani text-davygrey text-center pt-20p my-13">
        <div>
          <span>game :</span>
          <span className="ml-5p text-texasRose">grandora</span>
          <FontAwesomeIcon icon={faAngleDown} className="h-20 cursor-pointer ml-10 border border-white hover:border-davygrey"></FontAwesomeIcon>
        </div>
        <div className="text-15 tracking-6p flex items-center">
          <span className="text-texasRose">sort by :</span>
          <span className="ml-5p">recent buy</span>
          <FontAwesomeIcon icon={faAngleDown} className="h-20 cursor-pointer ml-10 border border-white hover:border-davygrey"></FontAwesomeIcon>
        </div>
      </div>
      <div className="flex flex-wrap overflow-hidden h-880p">
        {
          nftproducts.map((item, index) => {
            return <InventoryItem item={item} num={index} key={index} onClick={()=>onClickProduct(item)}/>
          })
        }
        {
          nftproducts.map((item, index) => {
            return <InventoryItem item={item} num={index} key={index}/>
          })
        }
      </div>
      <div className="flex justify-center items-center py-30p border-b-2 border-dashed border-davygrey border-opacity-25">
        <button className="text-default bg-texasRose rounded-default w-320p h-30p">SHOW MORE</button>
      </div>

      <div className="flex flex-wrap justify-between items-center uppercase text-25 leading-32 text-Rajdhani text-davygrey text-center pt-32 my-13">
        <div>
          <span>product :</span>
          <span className="ml-5p text-texasRose">art</span>
          <FontAwesomeIcon icon={faAngleDown} className="h-20 cursor-pointer ml-10 border border-white hover:border-davygrey"></FontAwesomeIcon>
        </div>
        <div className="text-15 tracking-6p flex items-center">
          <span className="text-texasRose">sort by :</span>
          <span className="ml-5p">recent buy</span>
          <FontAwesomeIcon icon={faAngleDown} className="h-20 cursor-pointer ml-10 border border-white hover:border-davygrey"></FontAwesomeIcon>
        </div>
      </div>
      <div className="rounded-20 bg-friarGrey bg-opacity-5 p-30p flex justify-center flex-col items-center">
        <p className="text-25 text-davygrey tracking-5p uppercase mb-10p">You don’t have any Product</p>
        <button className="text-default rounded-default bg-texasRose w-200 h-30">BUY NOW</button>
      </div>
    
      <ProductInfoModal item={currentItem} show={showDetail} onHide={ ()=> setShowDetail(false)}/>
    </div>
  );
};

export default UserInventory;