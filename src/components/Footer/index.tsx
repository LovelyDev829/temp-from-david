import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialIcons } from "../../core/data/soliallink";
import { secondPostSocialClass, whiteBtnClass } from "../../core/style/homepage";

const Footer = () => {
    return (
        <div className="bg-footerImg w-full h-500 min-h-500 bg-repeat-round">
            <div></div>
            <div className="msm:mx-20p md:mx-110">
                <div className="grid md:grid-cols-2 md:gap-40 text-white">
                    <div className="md:mt-200 msm:mt-150">
                        <p className="text-35 font-bold leading-45 tracking-5 uppercase">contact us</p>
                        <p className="text-18 font-semibold leading-24 tracking-2">You’ll find us at all hours on Discoard and also reach us through the usual channels.</p>
                        <div className="md:my-50p msm:my-10p">
                        {
                            socialIcons.map((item, index) => {
                            return <a key={index} className={secondPostSocialClass}><FontAwesomeIcon icon={item.icon} className='w-26 h-26 '/></a>;
                            })
                        }
                        </div>
                    </div>
                    <div className="md:mt-200 msm:10p">
                        <p className="text-35 font-bold leading-45 tracking-5 uppercase">Get the lastest updates</p>
                        <p className="text-18 font-semibold leading-24 tracking-2">Breaking news on events, competition and new depvolopements in GRANDONA, Delivered straight to your inbox.</p>
                        <div className="my-5p msm:flex msm:flex-col">
                            <input className="h-30 w-300 rounded-default text-iridium indent-15 bg-white bg-opacity-50 mr-5 " placeholder="email@domain.com"/>
                            <button className={whiteBtnClass + ' w-90 msm:mt-5p'} >sign up</button>
                        </div>
                    </div>
                </div>
                <p className="text-12 font-medium text-white">Copyright © 2022 Grandona. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;