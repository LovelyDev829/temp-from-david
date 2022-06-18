import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { GameItemProps } from "../../core/interfaces/pages";
import StatusIcon from "../../components/statusIcon";

const GameItem = (props:any) =>{
    const item:GameItemProps = props.item;
    const index:number = props.index;
    return (
        <div className="md:max-w-170 md:h-240 msm:max-w-100p rounded-t-10 rounded-b-30 shadow-primary shadow-cloudygrey/10 hover:shadow-cloudygrey m-11 font-Rajdhani text-cloudygrey" key={index}>
            <img src={item.img} className="msm:max-w-100p md:max-w-170 msm:h-100p md:h-170 rounded-t-10" />
            <div className="m-6p">
                <p className="msm:text-8 md:text-14 uppercase leading-16 tracking-3p">mini game grando</p>
                <p className="msm:text-8 md:text-14 uppercase leading-16 tracking-3p">{item.title}</p>
                <div className="flex text-texasRose md:mx-28 justify-center text-10 my-5p">
                    <span className="flex mr-8p"><StatusIcon icon={faHeart} size="15" type="enable"></StatusIcon> {item.loverate} % </span>
                    <span className="flex"><StatusIcon icon={faPlay} size="15" type="enable"></StatusIcon> {item.playrate} k </span>
                </div>
            </div>
        </div>
    );
};

export default GameItem;