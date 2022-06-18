import { NftProductsProps } from "../../core/interfaces/pages";
const CartItem = (props:any) =>{
    const item:NftProductsProps = props.item;
    return (
        <div className="p-20 border-b border-dashed border-davygrey border-opacity-25 flex font-Rajdhani">
            <img src={item.img} className="w-100p h-100p border border-desertStorm mr-13p rounded-10"/>
            <div className="max-w-720p w-full mt-5p">
                <div className="text-21 flex justify-start">
                    <span className="text-texasRose leading-21 font-semibold mr-10">GRANDO</span><span className="uppercase font-semibold text-davygrey leading-21">{item.title}</span>
                    {/* <span>RAREITY : {product.rareity}%</span> */}
                </div>
                <p className="text-14 text-cloudygrey">TKEN: 937374........39827498</p>
                <div className="text-21 text-davygrey tracking-6p flex justify-between mt-5p">
                    <div className="font-semibold">
                        <p>{item.price} ETH</p>
                        <p className="text-10 text-davygrey">($2,3888) </p>
                    </div>
                    <div className="h-25p flex w-110 mt-5p leading-21">
                        <button className="w-25p h-25p bg-texasRose text-white font-semibold rounded-l-5">-</button>
                        <input type="text" className="h-25p w-55p text-center font-semibold text-davygrey" value="1"/>
                        <button className="w-25p h-25p bg-texasRose text-white font-semibold rounded-r-5">+</button>
                    </div>
                    <div className="font-semibold w-190">
                        <p className="flex items-center"><span className="text-14">TOTAL:</span> 0.069 ETH</p>
                        <p className="text-10 text-davygrey">($2,3888) </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;