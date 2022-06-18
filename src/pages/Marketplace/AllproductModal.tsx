import { useState, useEffect } from "react";

import {Modal, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight, faAngleLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { ProductCategoryProps } from "../../core/interfaces/pages";
import { productCategories, infoSortBys, infoNftTypes, infoSlots, infoCatalyst, infoBehaviors, infoTabs, infoProductCategories } from "../../core/data/nftproducts";

import Nbutton from "../../components/Nbutton";
const AllProductModal = (props:any) => {
    const style1 = 'ml-50p text-21 leading-48 tracking-6p font-semibold text-productCategories cursor-pointer hover:text-texasRose flex items-center';
    const style2 = 'ml-50p text-17 leading-28 tracking-6p font-semibold text-productCategories cursor-pointer';
    const steps = [0,0,0,0,1];
    return (
        <Modal {...props} fullscreen id="filtermodal">
            <Modal.Body>
            <div className="mt-60p ml-30 font-Rajdhani">
                <div className="uppercase text-friarGrey leading-52 tracking-6p ml-10p">
                    <label className="hover:text-texasRose cursor-pointer" onClick={props.onHide}><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon> back</label>
                </div>
                <div className="grid grid-cols-4 text-18 leading-52 tracking-6p w-[calc(100%-200px)] min-w-450p">
                    <div>
                        <div key="1" className={style1}>
                            <FontAwesomeIcon icon={faCaretRight} className="-ml-20p mr-10p"></FontAwesomeIcon>
                            <p className="mr-20p">PRODUCT CATEGORY</p>
                        </div>
                        <div key="2" className={style2}>
                            {
                                infoProductCategories.map((item, index) => {
                                    return <div key={index} className="cursor-pointer hover:text-texasRose">
                                        <FontAwesomeIcon icon={item.img} className="text-davygrey"/>
                                        <span className="ml-10p">{item.name}</span>
                                    </div>;
                                })
                            }
                        </div>

                        <div key="3" className={style1}>
                            <FontAwesomeIcon icon={faCaretRight} className="-ml-20p mr-10p"></FontAwesomeIcon>
                            <p className="mr-20p">SEARCH</p>
                        </div>
                        <div key="4" className={style2 + " ml-30p flex items-center"}>
                            <FontAwesomeIcon icon={faSearch} className="relative left-30 h-20 cursor-pointer text-texasRose"></FontAwesomeIcon>
                            <input className="h-36 w-full rounded-default border border-cloud text-black indent-40 bg-white mr-5 " placeholder="TYPE..."/>
                        </div>

                        <div key="5" className={style1}>
                            <FontAwesomeIcon icon={faCaretRight} className="-ml-20p mr-10p"></FontAwesomeIcon>
                            <p className="mr-20p">SORT BY</p>
                        </div>
                        <div key="6" className={style2}>
                        {
                            infoSortBys.map((item, index) => {
                                return <div key={index} className="cursor-pointer hover:text-texasRose">
                                    <input type="radio" name={item} value={item} />
                                    <span className="ml-10p">{item}</span>
                                </div>;
                            })
                        }
                        </div>
                    </div>
                    <div>
                        <div key="1" className={style1}>
                            <FontAwesomeIcon icon={faCaretRight} className="-ml-20p mr-10p"></FontAwesomeIcon>
                            <p className="mr-20p">NFT TYPE</p>
                        </div>
                        <div key="2" className={style2}>
                        {
                            infoNftTypes.map((item, index) => {
                                return <div key={index} className="cursor-pointer hover:text-texasRose">
                                    <input type="radio" name={item} value={item} />
                                    <span className="ml-10p">{item}</span>
                                </div>;
                            })
                        }
                        </div>
                        <div key="3" className={style1}>
                            <FontAwesomeIcon icon={faCaretRight} className="-ml-20p mr-10p"></FontAwesomeIcon>
                            <p className="mr-20p">BEHAVIORS</p>
                        </div>
                        <div key="4" className={style2}>
                        {
                            infoBehaviors.map((item, index) => {
                                return <div key={index} className="cursor-pointer hover:text-texasRose">
                                    <input type="radio" name={item.name} value={item.name} />
                                    <span className="ml-10p">{item.name} ({item.count})</span>
                                </div>;
                            })
                        }
                        </div>
                    </div>
                    <div>
                        <div key="1" className={style1}>
                            <FontAwesomeIcon icon={faCaretRight} className="-ml-20p mr-10p"></FontAwesomeIcon>
                            <p className="mr-20p">SLOTS</p>
                        </div>
                        <div key="2" className={style2}>
                        {
                            infoSlots.map((item, index) => {
                                return <div key={index} className="cursor-pointer hover:text-texasRose">
                                    <input type="radio" name={item} value={item} />
                                    <span className="ml-10p">{item}</span>
                                </div>;
                            })
                        }
                        </div>

                        <div key="3" className={style1}>
                            <FontAwesomeIcon icon={faCaretRight} className="-ml-20p mr-10p"></FontAwesomeIcon>
                            <p className="mr-20p">CATALYST</p>
                        </div>
                        <div key="4" className={style2}>
                        {
                            infoCatalyst.map((item, index) => {
                                return <div key={index} className="cursor-pointer hover:text-texasRose">
                                    <input type="radio" name={item} value={item} />
                                    <span className="ml-10p">{item}</span>
                                </div>;
                            })
                        }
                        </div>

                        <div key="5" className={style1}>
                            <FontAwesomeIcon icon={faCaretRight} className="-ml-20p mr-10p"></FontAwesomeIcon>
                            <p className="mr-20p">GEM</p>
                        </div>
                        <div key="6" className={style2}>
                            <p>Equipment</p>
                            <div className="flex my-12p">
                                {
                                    steps.map((item, index) => {
                                        return <div key={index} className="flex items-center">
                                            <div className="w-18 h-18 rounded-full bg-cloud"></div>
                                            {
                                                item == 0 &&
                                                <div className="w-38 h-3 bg-cloud"></div>
                                            }
                                        </div>;
                                    })
                                }
                            </div>
                            
                            <p>Equipment</p>
                            <div className="flex my-12p">
                                {
                                    steps.map((item, index) => {
                                        return <div key={index} className="flex items-center">
                                            <div className="w-18 h-18 rounded-full bg-cloud"></div>
                                            {
                                                item == 0 &&
                                                <div className="w-38 h-3 bg-cloud"></div>
                                            }
                                        </div>;
                                    })
                                }
                            </div>

                            <p>Equipment</p>
                            <div className="flex my-12p">
                                {
                                    steps.map((item, index) => {
                                        return <div key={index} className="flex items-center">
                                            <div className="w-18 h-18 rounded-full bg-cloud"></div>
                                            {
                                                item == 0 &&
                                                <div className="w-38 h-3 bg-cloud"></div>
                                            }
                                        </div>;
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        <div key="1" className={style1}>
                            <FontAwesomeIcon icon={faCaretRight} className="-ml-20p mr-10p"></FontAwesomeIcon>
                            <p className="mr-20p">CATALYST</p>
                        </div>
                        <div key="2" className={style2}>
                        {
                            infoCatalyst.map((item, index) => {
                                return <div key={index} className="cursor-pointer hover:text-texasRose">
                                    <input type="radio" name={item} value={item} />
                                    <span className="ml-10p">{item}</span>
                                </div>;
                            })
                        }
                        </div>
                        <div key="3" className={style1}>
                            <FontAwesomeIcon icon={faCaretRight} className="-ml-20p mr-10p"></FontAwesomeIcon>
                            <p className="mr-20p">BEHAVIORS</p>
                        </div>
                        <div key="4" className={style2}>
                        {
                            infoTabs.map((item, index) => {
                                return <div key={index} className="cursor-pointer hover:text-texasRose">
                                    <input type="radio" name={item.name} value={item.name} />
                                    <span className="ml-10p">{item.name} ({item.count})</span>
                                </div>;
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
            </Modal.Body>
        </Modal>
    );
}

export default AllProductModal;