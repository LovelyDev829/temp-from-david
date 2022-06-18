import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faEye, faLock, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";

import { userSocials } from "../../core/data/usersetting";
import defaultAvatar from "../../assets/images/user/default-sm.png";
import eyeSvg from "../../assets/images/svgs/eye.svg";
const UserSetting = () => {
  let inputStyle = 'h-30 w-full rounded-default text-davygrey indent-15 bg-white bg-opacity-50 mr-5 border-2 border-davygrey mb-20p';
  return (
    <div className="mt-60p md:mx-110p font-Rajdhani text-davygrey">
      <div className="uppercase text-34 font-semibold">
        <FontAwesomeIcon icon={faCaretRight} className="text-texasRose mr-5p"/>
        General <span className="text-texasRose">setting</span>
      </div>
      <p className="text-25 tracking-5p uppercase font-medium">personal information</p>
      <p className="text-cloud text-17">Edit You Information To Get People To Know You</p>
      <div className="grid grid-cols-3 gap-40 p-20p border-b-2 border-dashed mb-20p">
        <div className="flex justify-center"><img src={defaultAvatar} className="border-4 border-texasRose rounded-full"/></div>
        <div>
          <p className="font-semibold text-17 tracking-10p">Username</p>
          <input className={inputStyle} placeholder="@grandoa"/>
          <p className="font-semibold text-17 tracking-10p mt-21p">Name</p>
          <input className={inputStyle} placeholder="@grandoa"/>
          <p className="font-semibold text-17 tracking-10p mt-21p">Personal Website</p>
          <input className={inputStyle} placeholder="@grandoa"/>
        </div>
        <div>
          <p className="font-semibold text-17 tracking-10p">Description</p>
          <textarea className="h-[calc(100%-47px)] w-full rounded-default text-davygrey indent-15 bg-white bg-opacity-50 mr-5 border-2 border-davygrey pt-15p" placeholder="Tell me about yourself"/>
        </div>
      </div>
      <p className="text-25 tracking-5p uppercase font-medium">complete your social media</p>
      <p className="text-cloud text-17">Connect Your Social Media Accounts</p>
      <div className="grid grid-cols-3 gap-10">
        {
          userSocials.map((item, index) => {
            return <div key={index} className="">
              <p><FontAwesomeIcon icon={item.icon} className="text-texasRose"/> <span>{item.name}</span></p>
              <div>
                <input className="h-30 w-[calc(100%-100px)] rounded-default text-davygrey indent-15 bg-white bg-opacity-50 mr-5 border-2 border-davygrey" placeholder="@grandoa"/>
                <button className="text-15 text-default bg-friarGrey w-80 h-30 rounded-default">CHECK</button>
              </div>
            </div>
          })
        }
      </div>
      <div className="my-30p mr-10p flex justify-end">
        <button className="text-15 text-default bg-texasRose w-170 h-30 rounded-default">SAVE SETTING</button>
      </div>

      <div className="uppercase text-34 font-semibold">
        <FontAwesomeIcon icon={faCaretRight} className="text-texasRose mr-5p"/>
        General <span className="text-texasRose">Email & password</span>
      </div>
      <div className="flex">
        <div className="flex items-center justify-center w-95p h-95p rounded-full bg-texasRose bg-opacity-10 mr-10p">
          <FontAwesomeIcon icon={faLock} className="w-60p h-60p text-texasRose"/>
        </div>
        <div>
          <p className="uppercase text-davygrey text-25 leading-25 tracking-3p font-medium">account security</p>
          <p className="text-17 text-cloud">Please enter your password to continue</p>
          <div className="relative">
            <input className="h-30 w-full rounded-default text-davygrey indent-15 bg-white bg-opacity-50 mr-5 border-2 border-davygrey" placeholder="@grandoa"/>
            <img src={eyeSvg} className="absolute right-10p top-2 w-26 h-26"/>
            <p className="text-10 absolute right-0">Forgot Your Password?</p>
          </div>
          <button className="w-170 text-default bg-texasRose rounded-default text-17 mt-25p leading-30 font-semibold">CONFIRM</button>
        </div>
      </div>
    </div>
  );
};

export default UserSetting;