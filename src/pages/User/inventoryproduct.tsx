import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTshirt, faPaintBrush, faCog, faHeart, faShoppingBag, faEye } from "@fortawesome/free-solid-svg-icons";

import StatusIcon from "../../components/statusIcon";
import GrandoItemIcon from "../../assets/images/svgs/grando.svg";
import ethereumSvg from "../../assets/images/svgs/ethereum.svg";
import eyeSvg from "../../assets/images/svgs/eye.svg";
import heartSvg from "../../assets/images/svgs/heart.svg";


const InventoryItem = (props:any) =>{
    const item = props.item;
    const num = props.num;
    const simple = props.simple ? true : false;
    const showClass={
        contain: "w-170 shadow-np2 border border-cloudygrey hover:border-iridium border-opacity-50 my-6 rounded-b-30 rounded-t-10 m-10p cursor-pointer",
        img : "max-w-170 h-170 rounded-t-10",
        title : "text-14 font-semibold font-lato leading-20 text-cloudygrey flex items-center",
        link : "",
    };
    let etherStyle = "text-32 text-davygrey flex items-center justify-between ";

    let rareityBtn = <button></button>;
    if (item.rareity < 100)
        rareityBtn = <button className="text-7 w-50p bg-desertStorm text-friarGrey p-2p px-5p rounded-default ml-5p">RARE</button>
    if (item.rareity <= 5)
        rareityBtn = <button className="text-7 bg-texasRose text-white p-2p px-5p rounded-default ml-5p">SUPER RARE</button>
    const clickProduct = () => {
        // alert(item.name);
    };

    return (
        <div className={showClass.contain} key={num} onClick={props.onClick}>
            <img className={showClass.img} src={item.img}/>
            <div className="p-15 font-lato">
                <div className={showClass.title}>
                    <img src={GrandoItemIcon} className="w-12 h-12 mr-3"/>
                    <p className="mr-15 uppercase">{item.title}</p>
                    {/* {item.rareity == 100 ? '' : item.rareity + '%'} */}
                </div>
                <div className="flex my-4p">
                    <StatusIcon icon={faTshirt} size="15" type="default"/>
                    <StatusIcon icon={faPaintBrush} size="15" type="default"/>
                    <StatusIcon icon={faCog} size="15" type="default"/>
                    {rareityBtn}
                </div>
                <div className={etherStyle}>
                    <div className="flex my-5p">
                        <img src={ethereumSvg} className="mr-10"/>
                        <div className="flex flex-col">
                            <p className="text-12 font-semibold">{item.price}</p>
                            <p className="text-6 text-cloudygrey">($2,388.74)</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <StatusIcon icon={faHeart} size="20" type="enable"/>
                        <p className="text-10">101.k</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InventoryItem;