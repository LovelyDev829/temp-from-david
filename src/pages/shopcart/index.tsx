import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { nftproducts } from "../../core/data/nftproducts";
import CartItem from "./cartitem";
import Nbutton from "../../components/Nbutton";
const Shoppingcart = () => {
  return (
    <div className="mt-60">
      <div className="flex flex-wrap items-center justify-center uppercase text-45 text-Rajdhani text-cloudygrey text-center pt-32 my-13 tracking-[0.03em]"><span className="font-semibold text-texasRose ml-10p">shopping cart</span>
      </div>
      <div className="flex mx-110 justify-between row">
        <div className="col-sm-8">
          <div className="h-400 overflow-y-auto">
            {
              nftproducts.map((item, index) => {
                return <CartItem item={item}></CartItem>;
              })
            }
          </div>
          <Nbutton bgcolor="friarGrey"  class="mt-20p mr-10 hover:bg-white hover:text-friarGrey bg-friarGrey text-white border-friarGrey w-160">Back to shop</Nbutton>
        </div>
        <div className="col-sm-4 font-Rajdhani text-davygrey uppercase col-sm-3 min-w-368 max-h-180 bg-friarGrey bg-opacity-5 p-29 rounded-8">
          <p className="flex justify-between text-21 leading-22 tracking-6p font-semibold"><span className="">Total cart</span> <span className=" text-texasRose">0.069 ETH</span></p>
          <p className="flex justify-between text-17 items-center"><span>(6 ITEM)</span> <span className="text-10">($2 388.74)</span></p>
          <button className="w-full h-32p text-white hover:text-texasRose bg-texasRose hover:bg-white border border-texasRose text-14 tracking-10p uppercase font-semibold rounded-4 mt-32p"><FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon> Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default Shoppingcart;