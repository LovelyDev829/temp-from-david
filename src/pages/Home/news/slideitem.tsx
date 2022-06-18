
const SlideItem = (props:any) =>{
    const item = props.info;
    const num = props.num;
    const img = props.img;
    const showClass={
        contain: "w-224 shadow-primary my-6 rounded-6",
        img : "w-224 h-224 rounded-t-6",
        title : "text-17 font-Rajdhani leading-20 text-cloudygrey",
        detail: "text-10 font-Rajdhani leading-13 text-cloudygrey my-3p",
        link : "",
    };
    return (
        <div className={showClass.contain} key={num}>
            <img className={showClass.img} src={item.img}/>
            <div className="p-6">
                <p className={showClass.title}>{item.title}</p>
                <p className={showClass.detail}>{item.date} {item.info}</p>
                <p className={showClass.detail}>{item.content}</p>
            </div>
        </div>
    );
}

export default SlideItem;