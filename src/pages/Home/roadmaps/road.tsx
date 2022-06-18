import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

const Road = (props:any) => {
    const data = props.data;
    const num = props.num;
    const oStyle = data.active == true ? " text-white border-2 border-pastelGrey rounded-full bg-texasRose" : " text-white border-2 border-pastelGrey rounded-full bg-pastelGrey";
    return (
        <div key={num} className="flex mb-72">
            <div className="z-100">
                <FontAwesomeIcon icon={faDotCircle} className={"w-30 h-30 z-40" + oStyle}/>
            </div>
            <div className="ml-10 mr-50">
                <p className="text-25 text-cloudygrey font-medium uppercase">{data.step}</p>
                <p className="text-52 text-davygrey font-medium">{data.date}</p>
            </div>
            <div className="text-17 text-davygrey">
                {
                    data.description.map((info: string, key:number) => {
                        return <p key={key}>- {info}</p>;
                    })
                }
            </div>
        </div>
    );
}

export default Road;