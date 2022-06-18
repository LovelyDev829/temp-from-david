import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faProjectDiagram, faCaretRight} from "@fortawesome/free-solid-svg-icons";

import { currentUser } from "../../core/data/usersetting";
import StatusIcon from "../../components/statusIcon";
import ShowEtherValue from "../../components/showEther";
import InventoryItem from "./inventoryproduct";
import GameItem from "../Gameplay/GameItem";
import { nftproducts } from "../../core/data/nftproducts";
import { GameInfos } from "../../core/data/gameinfo";

import defaultAvatar from "../../assets/images/user/default-sm.png";
const UserProfile = () =>{
  return (
  <div className="mt-60p md:mx-110p">
    <div className="flex py-20p border-b-2 border-dashed my-20p">
      <img src={defaultAvatar} className="w-120 h-120 border-2 border-texasRose rounded-full mx-30p"/>
      <div className="w-420">
        <p className="text-25 tracking-5p uppercase font-medium">{currentUser.name}</p>
        <p className="text-cloud text-17">{currentUser.email}</p>
        <p className="text-davygrey text-17 font-semibold">About</p>
        <p className="text-davygrey text-17">{currentUser.about}</p>
        <p className="text-davygrey text-17 font-semibold">Social Media</p>
        <div className="flex">
          {
            currentUser.socials.map((item, index) => {
              return <StatusIcon icon={item.icon} size="20" class="text-texasRose mr-10p" key={index}/>;
            })
          }
        </div>
      </div>
      <div className="mt-40p text-davygrey md:w-560 mx-20p">
        <p className="text-davygrey text-20 font-semibold">My Wallet</p>
        <div className="grid grid-cols-2 text-15 bg-texasRose bg-opacity-10 p-10p gap-20">
          <div>
            <p>Ethereum</p>
            <ShowEtherValue ethers={currentUser.wallet_ether} class="ml-40p"/>
          </div>
          <div>
            <p>Grando</p>
            <ShowEtherValue ethers={currentUser.wallet_grando} type="grando" class="ml-40p"/>
          </div>
        </div>
        <div className="flex justify-between px-15p py-3p mt-15p border-1 border-cloud rounded-5">
          <p>{currentUser.wallet_address}</p>
          <div>
            <FontAwesomeIcon icon={faLink} className="w-15p h-15p mr-10p"/>
            <FontAwesomeIcon icon={faProjectDiagram} className="w-15p h-15p"/>
          </div>
        </div>
      </div>
    </div>
    <div className="uppercase text-25 font-semibold text-davygrey">
      <FontAwesomeIcon icon={faCaretRight} className="text-texasRose mr-5p"/>
      MY INVENTORY
    </div>
    <p className="uppercase text-25 text-davygrey">Game x 10</p>
    <div className="flex flex-wrap h-300 overflow-hidden">
      {
        nftproducts.map((item, index) => {
          return <InventoryItem item={item} num={index} key={index}/>
        })
      }
    </div>
    <div className="flex text-17 font-medium tracking-10p text-davygrey mb-30p">
      <p className="w-190">Avatar x 1</p>
      <p className="w-190">Land x 1</p>
      <p className="w-190">EQUIPMENT x 0</p>
    </div>
    <p className="uppercase text-25 text-davygrey my-15p">Product x 0</p>
    <div className="rounded-20 bg-friarGrey bg-opacity-5 p-30p flex justify-center flex-col items-center">
      <p className="text-25 text-davygrey tracking-5p uppercase mb-10p">You don’t have any Product</p>
      <button className="text-default rounded-default bg-texasRose w-200 h-30">BUY NOW</button>
    </div>
    
    <div className="uppercase text-25 font-semibold text-davygrey mt-50p">
      <FontAwesomeIcon icon={faCaretRight} className="text-texasRose mr-5p"/>
      YOUR CREDITION
    </div>
    <p className="uppercase text-25 text-davygrey">Game x 10</p>
    <div className="flex">
      {
        GameInfos.map((item, index) => {
          if ( index < 3 )
          return <GameItem item={item} key={index} index={index}/>
        })
      }
    </div>
    <p className="uppercase text-25 text-davygrey">NFT x 0</p>
    <div className="rounded-20 bg-friarGrey bg-opacity-5 p-30p flex justify-center flex-col items-center">
      <p className="text-25 text-davygrey tracking-5p uppercase mb-10p">CREATE YOUR NFT ON GRANDORA</p>
      <button className="text-default rounded-default bg-texasRose w-200 h-30">CREATE</button>
    </div>
  </div>
  );
};

export default UserProfile;