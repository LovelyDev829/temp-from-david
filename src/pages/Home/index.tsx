import Landing from "./landing";
import Platform from "./platform";
import CentralHub from "./centralhub";
import Roadmaps from "./roadmaps/roadmaps";
import NewsSlide from "./news/newsslide";
import TrendSlide from "./trending/trendSlide";
import TeamDiv from "./team";

import tokenSalesImage from "../../assets/images/tokensales.png";
const Home = () => {
    return (
        <div id="home-page">
            <Landing/>
            <Platform/>
            <CentralHub/>
            <Roadmaps/>
            <NewsSlide />
            <TrendSlide/>
            <div className="w-full max-w-[1058px] md:h-278 mx-auto flex md:justify-between msm:items-center msm:flex-col">
                <div className="mt-70 hidden md:block">
                    <p className="uppercase text-80 leading-60 text-texasRose font-semibold">grando</p>
                    <p className="m-5p">Token Sales 2022, Q2</p>
                </div>
                <img src={tokenSalesImage}/>
                <div className="mt-70 md:hidden block text-center">
                    <p className="uppercase text-80 leading-60 text-texasRose font-semibold">grando <span className=" text-iridium font-light">token</span></p>
                    <p className="m-5p">Token Sales 2022, Q2</p>
                </div>
                <div className="mt-50">
                    <p className="uppercase text-80 leading-60 text-iridium tracking-15p leading-127 font-light hidden md:block">Token</p>
                    <div className="pl-10p uppercase border-l-2 border-texasRose">
                    <p>exchange it</p>
                    <p>Exchange The Token with</p>
                    <p>FORK PANCAKE SWAP</p>
                    </div>
                    <button className="uppercase w-200 h-30 bg-texasRose font-semibold text-14 text-default border border-texasRose text-center rounded-6 hover:text-texasRose hover:bg-white msm:mx-auto md:mx-9 mt-20p">Market Place</button>
                </div>
            </div>
            <TeamDiv />
        </div>
    );
}

export default Home;