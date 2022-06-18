import { useParams } from "react-router";
import { ProductSlides } from "../../core/data/product";
import Nbutton from "../../components/Nbutton";
import DropTab from "../../components/DropTab";
const ProductDetal = () => {
    let { id } = useParams();
    let num:string = id != undefined ? id : ':0';
    
    num = num.replaceAll(':','');
    let product = ProductSlides[parseInt(num)];
    return (
      <div className="mt-60p">
        <div className="grid grid-cols-2 gap-20 font-Rajdhani">
          <div>
            <img src={product.img} className="w-full"/>
          </div>
          <div className="ml-20p w-485">
            <p className="uppercase text-28 leading-32 tracking-6 text-texasRose mt-30p font-semibold tracking-6p"><span>grandora</span> <span className="text-cloudygrey">{product.title}</span></p>
            <p className="uppercase text-17 leading-21 tracking-10"><span className="text-cloudygrey font-semibold tracking-10p">creat by: </span><span className="text-texasRose">{product.creator}</span></p>
            <div className="flex justify-center border rounded-6 border-friarGrey border-opacity-50 my-18p ">
              <div className="text-center p-10p py-20p border-r border-friarGrey border-opacity-25 w-97" key="0"><p className="text-17 leading-30 tracking-6 text-cloudygrey font-semibold">{product.servers.download}M+</p><p className="text-14 leading-20 text-friarGrey">Download</p></div>
              
              <div className="text-center p-10p py-20p border-r border-friarGrey border-opacity-25 w-97" key="0"><p className="text-17 leading-30 tracking-6 text-cloudygrey font-semibold">{product.servers.genre}</p><p className="text-14 leading-20 text-friarGrey">Genre</p></div>

              <div className="text-center p-10p py-20p border-r border-friarGrey border-opacity-25 w-97" key="0"><p className="text-17 leading-30 tracking-6 text-cloudygrey font-semibold">{product.servers.serverSize} GB</p><p className="text-14 leading-20 text-friarGrey">Server Size</p></div>

              <div className="text-center p-10p py-20p border-r border-friarGrey border-opacity-25 w-97" key="0"><p className="text-17 leading-30 tracking-6 text-cloudygrey font-semibold">{product.servers.serverSize} GB</p><p className="text-14 leading-20 text-friarGrey">Server Size</p></div>

              <div className="text-center p-10p py-20p border-r border-friarGrey border-opacity-0 w-97" key="0"><p className="text-17 leading-30 tracking-6 text-cloudygrey font-semibold">{product.servers.serverSize} GB</p><p className="text-14 leading-20 text-friarGrey">white paper</p></div>
            </div>
            <div className="text-14 leading-18 tracking-10p">
              <Nbutton class="bg-texasRose text-default hover:bg-white hover:text-texasRose border-texasRose w-160 mr-22p">download / play</Nbutton>
              <Nbutton bgcolor="friarGrey"  class="mr-10 hover:bg-default hover:text-friarGrey bg-friarGrey text-default border-friarGrey w-160">add to cart</Nbutton>
            </div>
            <DropTab title="description" active class="mx-0p">
              {
                product.description.map((item, index)=>{
                  return <p key={index} className="text-14 leading-20 tracking-10p">{item}</p>;
                })
              }
            </DropTab>
            <DropTab title="detail" active>
              {
                product.detail.map((item, index)=>{
                  return <p key={index} className="text-14 leading-23 tracking-10">{item}</p>;
                })
              }
            </DropTab>
          </div>
        </div>
      </div>
  );
};

export default ProductDetal;