import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { GameInfos } from "../../core/data/gameinfo";
import GameItem from "./GameItem";
const Gameplays = () => {
    return (
      <div className="mt-60">
        <div className="flex flex-wrap items-center justify-center uppercase text-45 text-Rajdhani text-cloudygrey text-center pt-32 my-13 tracking-[0.03em]">select category<span className="font-semibold text-texasRose ml-10p">most play</span> 
          <FontAwesomeIcon icon={faAngleDown} className="h-20 cursor-pointer ml-10 border border-white hover:border-davygrey"></FontAwesomeIcon>
        </div>
        <div className="flex justify-center items-center">
          <FontAwesomeIcon icon={faSearch} className="relative left-30 h-20 cursor-pointer text-texasRose"></FontAwesomeIcon>
          <input className="h-36 w-500 rounded-default border border-cloud text-black indent-40 bg-white mr-5 " placeholder="SEARCH ITEM..."/>
        </div>
        <div className="ml-110 flex flex-wrap justify-start">
        {
          GameInfos.map((blog, index) => {
            return <GameItem item={blog} key={index} index={index}></GameItem>;
          })
        }
        </div>
      </div>
    );
};

export default Gameplays;