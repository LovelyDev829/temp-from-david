import { useState, useEffect } from "react";

import {Modal, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { ProductCategoryProps } from "../../core/interfaces/pages";
import { productCategories, productPerTypes } from "../../core/data/nftproducts";

import Nbutton from "../../components/Nbutton";
const ProductFilterModal = (props:any) => {
    const [category, setCategory] = useState(props.item);
    const changeType = (category: ProductCategoryProps) => {
        setCategory(category);
    }
    useEffect(()=>{
        setCategory(props.item);
    },[]);
    // console.log(category.index);
    return (
        <Modal {...props} fullscreen id="filtermodal">
            <Modal.Body>
                <div className="flex font-Rajdhani">
                    <div className="pl-40p max-w-320 bg-default">
                        <div className="uppercase text-friarGrey leading-52 tracking-6p mt-60p ">
                            <label className="hover:text-texasRose cursor-pointer" onClick={props.onHide}><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon> back to product list</label>
                        </div>
                        {
                            productCategories.map((item, index)=>{
                                return <div key={index} className="ml-50p text-21 leading-48 tracking-6p font-semibold text-productCategories cursor-pointer hover:text-texasRose flex items-center" onClick={() => changeType(item)}>
                                    {
                                        item.index == category.index &&
                                        <FontAwesomeIcon icon={faCaretRight} className="-ml-20p mr-10p text-texasRose"></FontAwesomeIcon>
                                    }
                                    {
                                        item.index == category.index &&
                                        <p className="text-texasRose">{item.type}</p>
                                    }
                                    {
                                        item.index != category.index &&
                                        <p>{item.type}</p>
                                    }
                                </div>;
                            })
                        }
                        <Nbutton class="w-[calc(100%-40px)] mx-20p my-10p bg-texasRose text-black hover:bg-white hover:text-texasRose border-texasRose text-21 leading-30">ENTER</Nbutton>
                        <Nbutton class="w-[calc(100%-40px)] mx-20p my-10p hover:bg-texasRose hover:text-black bg-default text-black border-texasRose text-21 leading-30">CLEAR</Nbutton>
                    </div>
                    <div className="grid grid-cols-3 bg-desertStorm opacity-80 text-18 leading-52 tracking-6p w-[calc(100%-320px)] min-w-450p">
                        <p className="mt-60p"></p>
                        <p className="mt-60p"></p>
                        <p className="mt-60p"></p>
                        {
                            productPerTypes.map((item, index) => {
                                return <div key={index} className="ml-20p cursor-pointer hover:text-texasRose">
                                    <input type="radio" name={item.name} value={item.name} />
                                    <span className="ml-10p">{item.name} ({item.count})</span>
                                </div>;
                            })
                        }
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default ProductFilterModal;