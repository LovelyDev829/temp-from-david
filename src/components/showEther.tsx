
import EthereumSvg from "../assets/images/svgs/ethereum.svg";
import GrandoSvg from "../assets/images/svgs/grando.svg";

const ShowEtherValue = (props:any) =>{
    const etherCount = props.ethers;
    const price = '2,388.74'; // props.price
    const iconStyle = props.iconStyle? props.iconStyle : 'w-30p';
    const etherStyle = props.etherStyle? props.etherStyle : 'text-28 leading-28';
    const priceStyle = props.priceStyle? props.priceStyle : 'text-10';
    const type = props.type? props.type : 'ether';
    return (
        <div className={"flex " + props.class}>
            {
                type == 'ether' &&
                <img src={EthereumSvg} className={iconStyle}/>
            }
            {
                type == 'grando' &&
                <img src={GrandoSvg} className={iconStyle}/>
            }
            <div className="ml-10p">
                <p className={etherStyle + ' font-semibold'}>{etherCount}</p>
                <p className={priceStyle}>{price} USD</p>
            </div>
        </div>
    );
};

export default ShowEtherValue;