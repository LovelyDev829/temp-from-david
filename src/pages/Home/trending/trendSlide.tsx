import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import showIcon from "../../../assets/images/svgs/categories.png";
import SlideItem from "./slideitem";
import { trendSlideItems } from "../../../core/data/trendslide";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
};
const TrendSlide = () =>{
    const slideClass={
        contain: "md:mx-auto max-w-1000 py-100 bg-davygrey bg-opacity-[2%] msm:mx-20",
        title: "uppercase my-5p text-34 text-Dajdhani text-davygrey font-bold text-montserrat"
    };
    // console.log(teams.map((team, key) => {
    //     return <TeamShow info={team} key={key} num={key}/>;
    // }));
    return (
        <div className={slideClass.contain} id="newsSlide">
            <div className='bg-seletiveyellow rounded-full w-55 h-55 bg-opacity-10 flex items-center'>
                <img src={showIcon} className="w-36 h-36 mx-auto"/>
            </div>
            <p className={slideClass.title}>Trending in <span className='text-seletiveyellow'>all categories</span></p>
            <div className="hidden md:block">
                <Carousel responsive={responsive} infinite autoPlay>
                    {
                    trendSlideItems.map( (item, index) => {
                        return <SlideItem info={item} key={index} num={index}/>;
                    })
                    }
                </Carousel>
            </div>
            <div className="block md:hidden flex justify-between">
                {
                trendSlideItems.map( (item, index) => {
                    if ( index < 3)
                        return <SlideItem info={item} key={index} num={index}/>;
                })
                }
            </div>
        </div>
    );
}
export default TrendSlide; 