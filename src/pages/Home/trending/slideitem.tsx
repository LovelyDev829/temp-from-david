
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTshirt, faPaintBrush, faCog, faHeart, faLock, faEye } from "@fortawesome/free-solid-svg-icons"
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import StatusIcon from "../../../components/statusIcon";
import GrandoItemIcon from "../../../assets/images/svgs/grando_item.svg";
const SlideItem = (props:any) =>{
    const item = props.info;
    const num = props.num;
    const showClass={
        contain: "msm:w-150p md:w-230 rounded-6 shadow-primary my-6 mx-5p",
        img : "msm:w-150p msm:h-150p md:w-230 md:h-230 rounded-t-6",
        title : "md:text-18 msm:text-12 font-semibold font-Rajdhani msm:leading-16 md:leading-25 text-cloudygrey flex",
        detail: "md:text-10 msm:text-7 font-Rajdhani leading-13 text-cloudygrey my-3p",
        link : "",
    };
    let rareityBtn = <button></button>;
    if (item.rareity < 100)
        rareityBtn = <button className="text-10 bg-deepacua bg-opacity-20 shadow-primary text-deepacua p-2p px-5p rounded-default p">RARE ITEM</button>
    if (item.rareity <= 5)
        rareityBtn = <button className="text-10 bg-deepacua shadow-primary text-white p-2p px-5p rounded-default ml-5p">SUPER RARE</button>
    return (
        <div className={showClass.contain} key={num}>
            <img className={showClass.img} src={item.img}/>
            <div className="p-6">
                <p className={showClass.title}><img src={GrandoItemIcon} className="mr-3"/><span className="mr-15">{item.title}</span> {item.rareity == 100 ? '' : item.rareity + '%'}</p>
                <div className="flex my-4p">
                    <StatusIcon icon={faTshirt} size="15" type="default"/>
                    <StatusIcon icon={faPaintBrush} size="15" type="default"/>
                    <StatusIcon icon={faCog} size="15" type="default"/>
                    {rareityBtn}
                </div>
                <p className={showClass.detail}>CREATE BY : {item.creator}</p>
                <div className="md:text-32 msm:text-20 text-davygrey flex items-center justify-between border-y-default border-mercury">
                    <div>
                        <FontAwesomeIcon icon={faEthereum} className="mr-10"/>
                        {item.price}
                    </div>
                    <div className="flex">
                        <StatusIcon icon={faHeart} size="30" type="disable"/>
                        <StatusIcon icon={faLock} size="30" type="enable"/>
                    </div>
                </div>
            <div className={showClass.detail + ' flex'}>
                <div className="mr-10"><FontAwesomeIcon icon={faEye} className="mr-2"/> : 120k</div>
                <div><FontAwesomeIcon icon={faHeart} className="mr-2"/> : 80.1k</div>
            </div>
            </div>
        </div>
    );
}

export default SlideItem;