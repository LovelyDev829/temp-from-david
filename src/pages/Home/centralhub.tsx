import { whiteBtnClass, deepacuaBtnClass } from "../../core/style/homepage";
import centralHubImage from "../../assets/images/central-hub.png";
import avatarImg from "../../assets/images/avatar.png";

const CentralHub = () => {
    return (
        <div id="central-hub">
            <div className="w-full md:h-768 msm:h-333 flex items-center bg-centralhub bg-repeat-round">
                <div className="w-400 ml-mlg md:block hidden">
                    <p className="text-64 font-Rajdhani font-semibold text-white">Central Hub</p>
                    <p className="text-17 font-Rajdhani font-semibold leading-21 text-white mb-20">Central Hub represents the entrance to the world. The central point where all players come to live in the world of Grandora.</p>
                    <button className={whiteBtnClass + ' w-200'}>Explore Map</button>
                </div>
            </div>
            <div className="flex flex-col md:hidden w-full items-center">
                <p className="text-64 font-Rajdhani font-semibold text-texasRose text-center">Central Hub</p>
                <p className="text-17 font-Rajdhani font-semibold leading-21 text-friarGrey mb-20 mx-50">Central Hub represents the entrance to the world. The central point where all players come to live in the world of Grandora.</p>
                <button className="uppercase w-220 h-35 font-semibold text-14 bg-texasRose text-default text-center rounded-6 hover:text-texasRose hover:bg-primary">Explore Map</button>
            </div>
            <div className="md:grid md:grid-cols-2 gap-40 mt-mlg items-center">
                <div>
                    <img src={avatarImg} className="md:float-right mx-auto"/>
                </div>
                <div className="w-full flex flex-col items-center md:items-start">
                    <p className="hidden md:block text-64 leading-72 font-Rajdhani font-semibold text-davygrey">CREATE</p>
                    <p className="hidden md:block text-64 leading-72 font-Rajdhani font-semibold text-davygrey">YOUR <span className="text-deepacua">AVATAR</span></p>
                    <p className="block md:hidden text-64 leading-72 font-Rajdhani font-semibold text-davygrey text-center">CREATE YOUR <span className="text-texasRose">AVATAR</span></p>
                    <p className="w-365 text-17 font-Rajdhani text-davygrey leading-24 my-10 msm:mx-auto md:mx-0">
                        The Avatar in Grandora will be represented in voxel-style character where players can modify features of their bodies piece by piece.
                    </p>
                    <p className="w-365 text-17 font-Rajdhani text-davygrey leading-24 my-10 mb-20 msm:mx-auto md:mx-0">
                        everyone will have the ability to customize 
                        their in-game character’s 
                    </p>
                    <button className="uppercase w-200 h-30 bg-texasRose font-semibold text-14 text-default border border-texasRose text-center rounded-6 hover:text-texasRose hover:bg-white msm:mx-auto md:mx-9">Market Place</button>
                </div>
            </div>
        </div>
    );
}

export default CentralHub;