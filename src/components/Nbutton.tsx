
const Nbutton = (props:any) => {
    let bgcolor = props.bgcolor ? props.bgcolor : 'primary';
    let fcolor = props.fcolor ? props.fcolor : 'white';
    let style = 'uppercase h-30 font-semibold text-14 text-center rounded-6 py-2p px-20p border';
    // style += ' border border-'+bgcolor;
    // style += ' bg-' + bgcolor + ' text-' + fcolor; // normal case
    // style += ' hover:text-' + bgcolor + ' hover:bg-' +fcolor; //hover case
    
    if ( props.class )
        style += ' ' + props.class;
    // console.log(props);
    return (
        <button className={style} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Nbutton;