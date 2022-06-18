import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTshirt, faPaintBrush, faCog, faHeart, faShoppingBag, faEye } from "@fortawesome/free-solid-svg-icons";
import StatusIcon from "./statusIcon";
import GrandoItemIcon from "../assets/images/svgs/grando_item.svg";
import ethereumSvg from "../assets/images/svgs/ethereum.svg";
import eyeSvg from "../assets/images/svgs/eye.svg";
import heartSvg from "../assets/images/svgs/heart.svg";

const ProductNFTItem = (props:any) =>{
    const item = props.info;
    const num = props.num;
    const simple = props.simple ? true : false;

    const showClass={
        contain: props.size + " shadow-np border border-cloudygrey hover:border-iridium border-opacity-50 my-6 " + props.class,
        img : props.size + " rounded-t-10",
        title : "text-14 font-semibold font-lato leading-20 text-cloudygrey flex",
        link : "",
    };
    let etherStyle = "text-32 text-davygrey flex items-center justify-between border-mercury ";
    if ( !props.simple )
        etherStyle += 'border-y';

    let rareityBtn = <button></button>;
    if (item.rareity < 100)
        rareityBtn = <button className="text-7 w-50p bg-desertStorm text-friarGrey p-2p px-5p rounded-default ml-5p">RARE</button>
    if (item.rareity <= 5)
        rareityBtn = <button className="text-7 bg-texasRose text-white p-2p px-5p rounded-default ml-5p">SUPER RARE</button>
    const clickProduct = () => {
        // alert(item.name);
    };

    return (
        <Link to={"/marketplace/productdetail/:"+num} className={showClass.contain} key={num} onClick={clickProduct}>
            <img className={showClass.img} src={item.img}/>
            <div className="p-15 font-lato">
                <p className={showClass.title}>
                    {
                        simple == false &&
                        <img src={GrandoItemIcon} className="mr-3"/>
                    }
                    <span className="mr-15 uppercase">GRANDO {item.title}</span>
                    {/* {item.rareity == 100 ? '' : item.rareity + '%'} */}
                </p>
                {
                    simple == false &&
                    <div className="flex my-4p">
                        <StatusIcon icon={faTshirt} size="15" type="default"/>
                        <StatusIcon icon={faPaintBrush} size="15" type="default"/>
                        <StatusIcon icon={faCog} size="15" type="default"/>
                        {rareityBtn}
                    </div>
                }
                <p className="text-8 font-lato leading-8 text-cloudygrey my-3p">
                    { simple == false &&
                        <span>CREATE BY : </span>
                    }{item.creator}
                </p>
                <div className={etherStyle}>
                    <div className="flex my-5p">
                        <img src={ethereumSvg} className="mr-10"/>
                        <div className="flex flex-col">
                            <p className="text-12 font-semibold">{item.price}</p>
                            <p className="text-6 text-cloudygrey">($2,388.74)</p>
                        </div>
                    </div>
                    <div className="flex">
                        <StatusIcon icon={faHeart} size="30" type="disable"/>
                        <StatusIcon icon={faShoppingBag} size="30" type="enable"/>
                    </div>
                </div>
                {
                    simple == false &&
                    <div className="text-8 font-lato leading-8 text-cloudygrey my-3p flex">
                        <div className="mr-10 flex items-center text-10"><img src={eyeSvg} className="mr-2"/> : 120k</div>
                        <div className="flex items-center text-10"><img src={heartSvg} className="mr-2"/> : 80.1k</div>
                    </div>
                }
            </div>
        </Link>
    );
}

export default ProductNFTItem;