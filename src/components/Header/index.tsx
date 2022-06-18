import React, {useState, Dispatch} from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faGlobe, faBars, faClose, faSignOut} from '@fortawesome/free-solid-svg-icons';

import SignModal from "../signin/SignModal";
import Nbutton from '../Nbutton';
import StatusIcon from '../statusIcon';
import {MenuItemProps} from "../../core/interfaces/pages";
import {menuItems, userInfoItems} from "../../core/data/menu";
import { signInClass } from '../../core/style/homepage';
import defaultAvatar from '../../assets/images/user/default-sm.png';

import {
  toggleUserLogin,
  selectUserLogined,
} from '../../core/store/slices/appSlice';

const Header = () => {
  const userLogined = useSelector(selectUserLogined);
  // console.log(userLogined);
  const dispatch = useDispatch();
  // const [userLogined, setUserLogined] = useState(true);
  const [userActionShow, setUserActionShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [menuShow, setMenuShow] = useState(false);
  const showModal = () =>{
    setModalShow(true);
  }
  const openSidebar = () => {
    // dispatch(toggleSidebar())
  }
  const setMenuToggle = () =>{
    if (menuShow)
      setMenuShow(false);
    else
      setMenuShow(true);
  }
  const setUserActionToggle = () => {
    if (userActionShow)
      setUserActionShow(false);
    else
      setUserActionShow(true);
  }
  const OnLogout = () =>{
    console.log('logout');
    // setRegisterShow(false);
  }
  const clientId= process.env.REACT_APP_CLIENT_ID ? process.env.REACT_APP_CLIENT_ID : "" ;
  const { signOut, loaded } = useGoogleLogout({
    clientId: clientId,
    onLogoutSuccess: OnLogout
  });
  const doLogout = () => {
    signOut();
    dispatch(toggleUserLogin(false));
  }
  const menuItemClass: string = 'lg:my-20 primary:mx-17 lg:mx-12 sm:mx-8  cursor-pointer text-davygrey text-12 border border-white hover:border-davygrey flex';

  return (
    <div className="w-full">
      <div className='fixed top-0 msm:ml-16p md:ml-66p md:w-[calc(100%-132px)] msm:w-[calc(100%-32px)] bg-white  rounded-b-20 flex h-30 justify-between bg-desertStorm bg-opacity-60 rounded-b-20 shadow-menu'>
        <button className='block md:hidden ml-20p' onClick={()=>setMenuToggle()}><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></button>
        <div className="ml-40 lg:ml-80 flex items-center hidden md:flex">
          {
            menuItems.map((item:MenuItemProps, index:any) => {
              return <Link to={item.url} key={index} className={menuItemClass}>{<img src={item.icon} className='mx-3p'/>} {item.content}</Link>
            })
          }
        </div>
        <div className='md:mr-40 lg:mr-80 flex items-center'>
          {
            userLogined == false &&
            <button className={signInClass} onClick={() => showModal()}>SIGN IN</button>
          }
          {
            userLogined == true &&
            <div className="flex items-center mr-10p relative">
              <p>Wecome, iamppookk</p>
              <img src={defaultAvatar} className="w-26p h-26p rounded-full mx-10p border-1 border-texasRose cursor-pointer" onClick={() => setUserActionToggle()}/>
              {
                userActionShow == true &&
                <div className="absolute top-30p right-0 bg-desertStorm text-friarGrey rounded-b-8 border w-173p">
                  {
                    userInfoItems.map((item,index)=>{
                      return <Link to={item.url} className="flex items-center hover:bg-texasRose p-10p cursor-pointer" key={index}>
                        <StatusIcon icon={item.icon} size="25" type="usermenu" class="mr-10p" />{item.content}
                      </Link>;
                    })
                  }
                  <div className="flex items-center hover:bg-texasRose p-10p cursor-pointer" onClick={()=>doLogout()}>
                    <StatusIcon icon={faSignOut} size="25" type="usermenu" class="mr-10p" />Log Out
                  </div>
                </div>
              }
            </div>
          }
          <Link to="shopcart"><FontAwesomeIcon icon={faShoppingBag} className='text-davygrey hover:text-primary mr-27'/></Link>
          <FontAwesomeIcon icon={faGlobe} className="text-davygrey font-light hidden md:block"></FontAwesomeIcon>
          <div className="select hidden md:block">
            <select className="bg-desertStorm ml-11p w-50p text-center cursor-pointer">
              <option>EN</option>
              <option>KR</option>
              <option>CN</option>
              <option>JP</option>
              <option>TH</option>
            </select>
          </div>
        </div>
      </div>
      {
        menuShow == true &&
        <div className="bg-desertStorm w-full">
            <div className="ml-40p flex justify-between">
              <div>
                <FontAwesomeIcon icon={faClose} onClick={()=>setMenuShow(false)} className="cursor-pointer"></FontAwesomeIcon>
                <label className="ml-10p text-texasRose font-semibold text-18">GRANDORA</label>
              </div>
              <div>
                <FontAwesomeIcon icon={faGlobe} className="text-davygrey font-light"></FontAwesomeIcon>
                <select className="bg-desertStorm ml-11p w-50p text-center cursor-pointer mr-20p">
                  <option>EN</option>
                  <option>KR</option>
                  <option>CN</option>
                  <option>JP</option>
                  <option>TH</option>
                </select>
              </div>
            </div>
            <div className="border-y-2 border-dashed mx-40p border-davygrey">
            {
              menuItems.map((item:MenuItemProps, index:any) => {
                return <Link to={item.url} key={index} className="cursor-pointer text-davygrey text-12 p-10p flex hover:text-texasRose">{<img src={item.icon} className='mx-3p'/>} {item.content}</Link>
              })
            }
            </div>
            <div className="p-20p flex justify-center">
              <Nbutton class="bg-texasRose text-default hover:bg-white hover:text-texasRose border-texasRose w-160 mr-22p">sign in</Nbutton>
              <Nbutton bgcolor="friarGrey"  class="mr-10 hover:bg-default hover:text-friarGrey bg-friarGrey text-default border-friarGrey w-160">log in</Nbutton>
            </div>
        </div>
      }
      <SignModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default Header; 