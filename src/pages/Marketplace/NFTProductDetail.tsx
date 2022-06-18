
import { useParams } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faCaretRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faEthereum } from "@fortawesome/free-brands-svg-icons";
import { nftproducts } from "../../core/data/nftproducts";
import Nbutton from "../../components/Nbutton";
import DropTab from "../../components/DropTab";
import ProductNFTItem from "../../components/ProductNFTItem";
import StatusIcon from "../../components/statusIcon";
import ethereumSvg from "../../assets/images/svgs/ethereum.svg";

const NFTProductDetail = () => {
  let { id } = useParams();
  let num:string = id != undefined ? id : ':0';
  
  num = num.replaceAll(':','');
  console.log(num);
  let product = nftproducts[parseInt(num)];

  const productInfo = [{
      caption: 'Type',
      detail: 'Enity'
    },
    {
      caption: 'Behaviors',
      detail: 'Avatar'
    },
    {
      caption: 'Biomes',
      detail: 'None'
    },
    {
      caption: 'Tag',
      detail: 'Magic Fantacy'
    }
  ];
  const createNFTs = [nftproducts[1], nftproducts[2], nftproducts[3], nftproducts[4], nftproducts[5], nftproducts[6]];
  return (
    <div className="max-w-[1196px] mt-90 text-Rajdhani mx-auto" id="nft-productdetail-container">
      <div className="flex my-10">
        <div className="w-465 m-10">
          <img src={product.img} className="max-w-475 w-full border border-cloud rounded-10"/>
          <div className="flex justify-center mt-10">
            <Nbutton class="mr-10 bg-texasRose text-white hover:bg-white hover:text-texasRose border-texasRose">20 VIEW</Nbutton>
            <Nbutton class="hover:bg-texasRose hover:text-white bg-white text-texasRose border-texasRose">30 VIEW</Nbutton>
          </div>
        </div>

        <div className="w-465 m-10">
          <label className="text-28 flex justify-start">
            <span className="text-texasRose font-semibold mr-10">GRANDO</span><span className="uppercase font-semibold">{product.title}</span>
            {/* <span>RAREITY : {product.rareity}%</span> */}
          </label>
          <p className="text-14 text-cloudygrey my-5p">TKEN: 937374........39827498</p>

          <div className="flex justify-between items-center text-17 text-Rajdhani leading-13">
            <p><span className="font-semibold text-cloudygrey">CREATE BY : </span><span className="text-texasRose"> {product.creator}</span></p>
            <p className="flex">
              <StatusIcon icon={faHeart} size="25" type="full"/>
              <StatusIcon icon={faFacebookF} size="25" type="full"/>
              <StatusIcon icon={faTwitter} size="25" type="full"/>
            </p>
          </div>

          <div className="text-32 text-davygrey flex items-center justify-start">
              <div>
                <div className="flex my-5p items-center">
                  <img src={ethereumSvg} className="mr-10 w-40 h-40"/>
                  <div className="flex flex-col">
                    <p className="text-28 font-semibold">{product.price}</p>
                    <p className="text-10 text-cloudygrey">($2,388.74)</p>
                  </div>
                </div>
              </div>
          </div>

          <div className="flex justify-center py-20 border-b border-dashed border-davygrey border-opacity-25">
            <Nbutton bgcolor="friarGrey"  class="mr-10 hover:bg-white hover:text-friarGrey bg-friarGrey text-white border-friarGrey w-160">add to cart</Nbutton>
            <Nbutton class="bg-texasRose text-white hover:bg-white hover:text-texasRose border-texasRose w-160">buy now</Nbutton>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-20">
            {
              productInfo.map((item, index) => {
                return <div key={index} className="border-1 border-texasRose rounded-6 p-15 m-8">
                        <p className="text-17 leading-23 tracking-10p font-semibold text-davygrey flex items-center"><FontAwesomeIcon icon={faCaretRight} className="text-texasRose mr-7 my-5p"></FontAwesomeIcon>
                        {item.caption}</p>
                        <p className="text-14 leading-20 tracking-10p text-davygrey ml-14 min-h-40">{item.detail}</p>
                      </div>;
              })
            }
          </div>
        </div>
        
        <div className="w-465 m-10">
            <DropTab title="description" index="0" active>
              <p className="text-davygrey">Jenkins The Valet’s Writer’s Room is a Collection of 6942 NFTs That Unlock a Memberrs-Only Web3 Authenticated</p>
            </DropTab>
            <DropTab title="description" index="1" active>
              <p className="text-davygrey font-semibold mt-10"> Contract Address</p>
              <p className="text-davygrey">0x8806</p>
              
              <p className="text-davygrey font-semibold"> Token ID</p>
              <p className="text-davygrey">2428</p>
              
              <p className="text-davygrey font-semibold"> Token Standard</p>
              <p className="text-davygrey">ERC-721</p>
              
              <p className="text-davygrey font-semibold"> Blockchain</p>
              <p className="text-davygrey mb-10">Ethereum</p>
            </DropTab>
            <DropTab title="properties" index="2" hide>
              <p className="text-davygrey">Jenkins The Valet’s Writer’s Room is a Collection of 6942 NFTs That Unlock a Memberrs-Only Web3 Authenticated</p>
            </DropTab>
            <DropTab title="creating an asset" index="3" hide>
              <p className="text-davygrey">Jenkins The Valet’s Writer’s Room is a Collection of 6942 NFTs That Unlock a Memberrs-Only Web3 Authenticated</p>
            </DropTab>
        </div>
      </div>
      <div className="uppercase h-35 my-10 text-17 font-semibold text-cloudygrey bg-texasRose bg-opacity-10 flex items-center px-15 rounded-6" >
        NFT BY CREATOR
      </div>
      <div className="my-10">
        <div className="flex flex-wrap justify-between">
          {
            createNFTs.map( (item, index) => {
              return <ProductNFTItem info={item} num={index} class="rounded-b-10 m-11 shadow-np1 border-0" simple size="w-174"/>;
            })
          }
        </div>
      </div>
    </div>
  );
}

export default NFTProductDetail;