import { Link } from "react-router-dom";
import { BlogProps } from "../../core/interfaces/pages";

const BlogItem = (props:any) =>{
    const item:BlogProps = props.item;
    const index:number = props.index;
    return (
        <div className="w-270 h-430 rounded-10 shadow-primary shadow-cloudygrey/10 hover:shadow-cloudygrey m-11 font-Rajdhani text-cloudygrey" >
            <img src={item.img} className="w-270 h-270 rounded-t-10" />
            <div className="m-11">
                <p className="text-17 uppercase leading-20 tracking-3p">updated news</p>
                <p className="text-17 uppercase leading-20 tracking-3p">{item.title}</p>
                <p className="flex uppercase text-10 leading-13 my-5p tracking-10p"><span className="w-83">{item.date}</span><span className="w-83">BY {item.creator}</span></p>
                <div className="text-10 leading-13 tracking-10p h-50p overflow-hidden">{item.detail}</div>
                <Link to=""><span  className="uppercase text-10 leading-13 py-5 text-texasRose">- continue reading</span></Link>
            </div>
        </div>
    );
};

export default BlogItem;