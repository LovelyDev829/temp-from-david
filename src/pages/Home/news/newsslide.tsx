import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import echoIcon from "../../../assets/images/svgs/wahtsnew.png";
import { GameInfos } from '../../../core/data/gameinfo';
import GameItem from '../../Gameplay/GameItem';
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    xtablet: {
      breakpoint: { max: 724, min: 0 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
const NewsSlide = () =>{
    const slideClass={
        contain: "mx-auto w-[calc(100%-40px)] md:w-[calc(100%-220px)] max-w-1000 font-Rajdhani",
        title: "uppercase py-5p text-34 text-36p text-Dajdhani text-davygrey font-bold text-montserrat",
        description: "px-220p text-center text-avenir mb-10p text-18p text-roadDetail",
    };
    // console.log(teams.map((team, key) => {
    //     return <TeamShow info={team} key={key} index={key}/>;
    // }));
    const newsItems1 = [GameInfos[0], GameInfos[1], GameInfos[2], GameInfos[3], GameInfos[4], GameInfos[5]];
    const newsItems2 = [GameInfos[6], GameInfos[7], GameInfos[8], GameInfos[9], GameInfos[10], GameInfos[11]];
    const newsItems3 = [GameInfos[12], GameInfos[13], GameInfos[14], GameInfos[15], GameInfos[16], GameInfos[17]];

    return (
        <div className={slideClass.contain} id="newsSlide">
            <div className='bg-seletiveyellow rounded-full w-55 h-55 bg-opacity-10 flex items-center'>
                <img src={echoIcon} className="w-36 h-36 mx-auto"/>
            </div>
            <h2 className={slideClass.title}>WHAT'S NEW</h2>
            <p className="uppercase text-21 leading-26 tracking-10p font-semibold text-davygrey py-5p">
              <FontAwesomeIcon icon={faAngleRight} className='mr-10p text-texasRose'></FontAwesomeIcon>most play
            </p>
            <div className="pb-10p hidden md:block">
                <Carousel responsive={responsive} infinite autoPlay>
                    {
                    newsItems1.map( (item, index) => {
                        return <GameItem item={item} key={index} index={index}/>;
                    })
                    }
                </Carousel>
            </div>
            <div className="pb-10p block md:hidden flex justify-between">
              {
              newsItems1.map( (item, index) => {
                if (index < 3)
                  return <GameItem item={item} key={index} index={index}/>;
              })
              }
            </div>
            <p className="uppercase text-21 leading-26 tracking-10p font-semibold text-davygrey py-5p">
              <FontAwesomeIcon icon={faAngleRight} className='mr-10p text-texasRose'></FontAwesomeIcon>recommended for you
            </p>
            <div className="pb-10p hidden md:block">
                <Carousel responsive={responsive} infinite autoPlay>
                    {
                    newsItems2.map( (item, index) => {
                        return <GameItem item={item} key={index} index={index}/>;
                    })
                    }
                </Carousel>
            </div>
            <div className="pb-10p block md:hidden flex justify-between">
              {
              newsItems2.map( (item, index) => {
                if (index < 3)
                  return <GameItem item={item} key={index} index={index}/>;
              })
              }
            </div>
            <p className="uppercase text-21 leading-26 tracking-10p font-semibold text-davygrey py-5p">
              <FontAwesomeIcon icon={faAngleRight} className='mr-10p text-texasRose'></FontAwesomeIcon>rising star
            </p>
            <div className="pb-30p hidden md:block">
                <Carousel responsive={responsive} infinite autoPlay>
                    {
                    newsItems3.map( (item, index) => {
                        return <GameItem item={item} key={index} index={index}/>;
                    })
                    }
                </Carousel>
            </div>
            <div className="pb-30p block md:hidden flex justify-between">
              {
              newsItems3.map( (item, index) => {
                if (index < 3)
                  return <GameItem item={item} key={index} index={index}/>;
              })
              }
            </div>
        </div>
    );
}
export default NewsSlide; 