import {Modal, Button} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { BlogProps } from '../../core/interfaces/pages';
const BlogPopUpModal = (props:any) =>{
    const item:BlogProps = props.item;
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
              <img src={item.img} className='w-300 h-300 rounded-10'/>
          </div>
          <div className="w-485 mx-15 text-davygrey">
            <p className="text-25 uppercase leading-27 tracking-3p">updated news</p>
            <p className="text-25 uppercase leading-27 tracking-3p">{item.title}</p>
            <p className="flex uppercase text-12 leading-15 my-10p tracking-10p"><span className="w-83">{item.date}</span><span className="w-83">BY {item.creator}</span></p>
            <div className="text-17 leading-24 tracking-10p h-220p overflow-y-auto pr-6p mr-10">{item.detail}</div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

export default BlogPopUpModal;