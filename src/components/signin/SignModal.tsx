import { useState } from 'react';
import GoogleLogin from "react-google-login";
import ReactFacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import TwitterLogin from "react-twitter-login";
import { useDispatch } from 'react-redux';
import {Modal} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import SignInModal from './SignInModal';
import RegisterModal from './RegisterModal';
import {
  toggleUserLogin,
  selectUserLogined,
} from '../../core/store/slices/appSlice';

const SignModal = (props:any) =>{
  console.log(process.env);
  const clientId= process.env.REACT_APP_CLIENT_ID ? process.env.REACT_APP_CLIENT_ID : "" ;
  // const facebookId = process.env.REACT_FACEBOOK_ID ? process.env.REACT_FACEBOOK_ID : "" ;
  const facebookId = '239281188344238';
  const CONSUMER_KEY = process.env.REACT_TWITTER_ID ? process.env.REACT_TWITTER_ID : "" ;
  const CONSUMER_SECRET = process.env.REACT_TWITTER_SECREAT_ID ? process.env.REACT_TWITTER_SECREAT_ID : "" ;
  // console.log(facebookId);
  const dispatch = useDispatch();
  const [siginShow, setSigninShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);
  const showSigninModal = () =>{
    setSigninShow(true);
  }
  const showRegisterModal = () =>{
    setRegisterShow(true);
  }
  const onSuccess = (res:any) =>{
    console.log('[login success] currentUser:', res.profileObj);
    dispatch(toggleUserLogin(true));
    // setRegisterShow(false);
  }
  const onFailure = (res:any) =>{
    console.log('[login failure] res:', res);
  }
  const responseFacebook = (response:any) => {
    console.log(response);
  }
  const authHandler = (err:any, data:any) => {
    console.log(err, data);
  };
  return (
    <div>
      <Modal
        {...props}
        size="w640"
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className='py-20p font-Rajdhani text-center tracking-10'>
          <p className="uppercase text-35 leading-45">sign in or create account</p>
          <p className="uppercase text-16 leading-20">User May Login With Metamask</p>
          <p className="uppercase text-16 leading-20">General Registration Or Other Social Media</p>
          <div className="grid grid-cols-2 gap-10">
            <div className="ml-22p">
                <p className="text-14 leading-18 text-left mt-5p">SOCIAL</p>
                <div className="w-full">
                  <ReactFacebookLogin
                    appId={facebookId}
                    callback={responseFacebook}
                    render={renderProps => (
                      <button onClick={renderProps.onClick} className="w-full bg-clearBlue bg-opacity-10 rounded-10 h-75p my-11p flex items-center">
                        <div className="w-54 h-54 rounded-full bg-white flex items-center justify-center ml-23p shadow-sign1">
                          <FontAwesomeIcon icon={faFacebook} className='text-brightBlue text-28'></FontAwesomeIcon>
                        </div>
                        <div className="uppercase ml-11p flex flex-col">
                            <label className="text-10 leading-12 opacity-75 text-left">continue with</label>
                            <label className="text-20 leading-26 text-brightBlue">facebook</label>
                        </div>
                      </button>
                      )
                    }
                    />                      
                </div>
                <div className="w-full">
                  {/* <TwitterLogin
                    authCallback={authHandler}
                    consumerKey={CONSUMER_KEY}
                    consumerSecret={CONSUMER_SECRET}
                    render={ renderProps => (
                      <button onClick={renderProps.onClick} className="w-full bg-clearBlue bg-opacity-10 rounded-10 h-75p my-11p flex items-center">
                        <div className="w-54 h-54 rounded-full bg-white flex items-center justify-center ml-23p shadow-sign1">
                            <FontAwesomeIcon icon={faTwitter} className='text-brightBlue text-28'></FontAwesomeIcon>
                        </div>
                        <div className="uppercase ml-11p flex flex-col">
                            <label className="text-10 leading-12 opacity-75 text-left">continue with</label>
                            <label className="text-20 leading-26 text-brightBlue">twitter</label>
                        </div>
                      </button>
                    )}
                  /> */}
                  <button className="w-full bg-clearBlue bg-opacity-10 rounded-10 h-75p my-11p flex items-center">
                        <div className="w-54 h-54 rounded-full bg-white flex items-center justify-center ml-23p shadow-sign1">
                            <FontAwesomeIcon icon={faTwitter} className='text-brightBlue text-28'></FontAwesomeIcon>
                        </div>
                        <div className="uppercase ml-11p flex flex-col">
                            <label className="text-10 leading-12 opacity-75 text-left">continue with</label>
                            <label className="text-20 leading-26 text-brightBlue">twitter</label>
                        </div>
                  </button>
                </div>
            </div>
            <div className="mr-22p">
                <p className="text-14 leading-18 text-left mt-5p">WEB3</p>
                <div className="bg-[#FFF3E9] rounded-10 h-135p my-6p flex flex-col justify-center">
                  <div className="w-54 h-54 rounded-full bg-white flex items-center justify-center ml-23p shadow-sign3 mx-auto">
                      <FontAwesomeIcon icon={faTwitter} className='text-brightBlue text-28'></FontAwesomeIcon>
                  </div>
                  <div className="uppercase ml-11p flex flex-col mx-auto mt-10p">
                      <label className="text-10 leading-12 opacity-75">continue with</label>
                      <label className="text-20 leading-26 text-[#ED8000]">metamasks</label>
                  </div>                  
                </div>
                <p className="text-14 leading-18 text-left mt-12p uppercase">General register</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="ml-22p">
              <GoogleLogin 
                clientId={clientId}
                buttonText="Login"
                render={renderProps => (
                  <button className="bg-[#F7F7F7] w-full rounded-10 h-75p flex items-center hover:border cursor-pointer" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    <div className="w-54 h-54 rounded-full bg-white flex items-center justify-center ml-23p">
                    <FontAwesomeIcon icon={faFacebook} className='text-brightBlue text-28'></FontAwesomeIcon>
                    </div>
                    <div className="uppercase ml-11p flex flex-col">
                        <label className="text-10 leading-12 opacity-75 text-left">continue with</label>
                        <label className="text-20 leading-26">google</label>
                    </div>
                  </button>
                )}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              />
            </div>
            <div className="mr-22p">
              <div className="bg-[#653E9D] bg-opacity-10 rounded-10 h-75p flex items-center cursor-pointer hover:border" key="2" onClick={()=>showRegisterModal()}>
                  <div className="w-54 h-54 rounded-full bg-white flex items-center justify-center ml-23p shadow-sign2">
                      <FontAwesomeIcon icon={faUser} className='text-[#653E9D] text-28'></FontAwesomeIcon>
                  </div>
                  <div className="uppercase ml-11p flex flex-col">
                      <label className="text-10 leading-12 opacity-75 text-left">continue with</label>
                      <label className="text-20 leading-26">Register</label>
                  </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <SignInModal show={siginShow}
      onHide={() => setSigninShow(false)}></SignInModal>
      <RegisterModal show={registerShow}
      onHide={() => setRegisterShow(false)}></RegisterModal>
    </div>
  );
}

export default SignModal;