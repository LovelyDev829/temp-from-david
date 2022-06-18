import {Modal, Button} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faTshirt, faPaintBrush, faCog, faHeart, faShoppingBag, faEye } from '@fortawesome/free-solid-svg-icons';
import { NftProductsProps } from '../../core/interfaces/pages';

import StatusIcon from "../../components/statusIcon";
import DropTab from '../../components/DropTab';
import GrandoItemIcon from "../../assets/images/svgs/grando.svg";
import ethereumSvg from "../../assets/images/svgs/ethereum.svg";
const ProductInfoModal = (props:any) =>{
    const item:NftProductsProps = props.item;
    return (
      <Modal
        {...props}
        size="lg"
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className='p-10 pt-20 flex justify-end'>
            <FontAwesomeIcon icon={faClose} className="w-20 h-20 cursor-pointer mr-20" onClick={props.onHide}></FontAwesomeIcon>
        </div>
        <Modal.Body className='flex pt-0 pb-20'>
          <div className='mx-15'>
              <img src={item.img} className='w-400 h-400 rounded-10 border'/>
              <div className=" flex justify-center my-10p">
                  <button className="uppercase px-25p mx-13p h-30 rounded-default bg-davygrey text-default text-14 font-semibold">buy item</button>
                  <button className="uppercase px-25p h-30 rounded-default bg-texasRose text-default text-14 font-semibold">sell item</button>
              </div>
          </div>
          <div className="w-485 mx-15 text-davygrey h-400 overflow-auto">
            <div className="text-25 font-semibold font-lato leading-20 text-cloudygrey flex items-center">
                <img src={GrandoItemIcon} className="w-28 h-28 mr-3"/>
                <p className="mr-15 uppercase">{item.title}</p>
                {/* {item.rareity == 100 ? '' : item.rareity + '%'} */}
            </div>
            <div className="flex my-4p justify-between items-center">
              <div className="flex">
                <StatusIcon icon={faTshirt} size="15" type="default"/>
                <StatusIcon icon={faPaintBrush} size="15" type="default"/>
                <StatusIcon icon={faCog} size="15" type="default"/>
              </div>
              <div className="flex my-5p">
                  <img src={ethereumSvg} className="mr-10"/>
                  <div className="flex flex-col">
                      <p className="text-12 font-semibold">{item.price}</p>
                      <p className="text-6 text-cloudygrey">($2,388.74)</p>
                  </div>
              </div>
            </div>
            <DropTab title="DESCRIPTION" active>
              <p>Jenkins The Valet’s Writer’s Room is a Collection of 6942 NFTs That Unlock a Memberrs-Only Web3 Authenticated Jenkins The Valet’s Writer’s Room is a Collection of 6942 NFTs That Unlock a Memberrs-Only Web3 Authenticated</p>
            </DropTab>
            <DropTab title="detail" active>
              <p className="font-semibold">Contact Address</p>
              <p>0x8806....6fcc</p>
              <p className="font-semibold">Token ID</p>
              <p>2428</p>
              <p className="font-semibold">Token Standard</p>
              <p>ERC-721</p>
              <p className="font-semibold">Blockchain</p>
              <p>Ethereum</p>
            </DropTab>
          </div>
        </Modal.Body>
      </Modal>
    );
}

export default ProductInfoModal;