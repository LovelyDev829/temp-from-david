import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { platformClass } from '../../core/style/homepage';
import { landingItems1, landingItems2, landingItemClass } from '../../core/data/landinginfo';

import platformImage from "../../assets/images/platform.png";


const Platform = () => {
  return (
    <div id="platform" className="mx-60 grid md:grid-cols-3 gap-20 mt-160">
        <div className="">
            <img src={platformImage}/>
            {/* <div className="uppercase text-42 leading-46 text-davygrey">
                <p>The platform</p>
                <p>where everyone</p>
                <p>can be anythin</p>
            </div> */}
            <div className={platformClass}>
                <div>
                    <p>LIMITLESS</p>
                    <p>POSSIBILITY VERSE</p>
                </div>
            </div>
            <button className='hidden md:block bg-texasRose text-white hover:text-primary border border-texasRose h-30 w-197 text-14 uppercase tracking-20p mt-23 ml-100 rounded-6'><FontAwesomeIcon icon={faFile} className='mr-7'/> whitepaper</button>
        </div>
        <div>
            {
                landingItems1.map((item, index) => {
                    return <div key={index} className='mb-8p md:mb-32 md:h-228'>
                        <div className='bg-texasRose rounded-full w-55 h-55 bg-opacity-10 flex items-center'>
                            <img src={item.icon} className={landingItemClass.icon}/>
                        </div>
                        <label className={landingItemClass.title}>{item.title}</label>
                        <p className={landingItemClass.content}>{item.content}</p>
                    </div>;
                })
            }
        </div>
        <div>
            {
                landingItems2.map((item, index) => {
                    return <div key={index} className='mb-8p md:mb-32 md:h-228'>
                        <div className='bg-seletiveyellow rounded-full w-55 h-55 bg-opacity-10 flex items-center'>
                            <img src={item.icon} className={landingItemClass.icon}/>
                        </div>
                        <label className={landingItemClass.title}>{item.title}</label>
                        <p className={landingItemClass.content}>{item.content}</p>
                    </div>;
                })
            }
        </div>
        <button className='block md:hidden bg-texasRose text-white hover:text-primary border border-texasRose h-35 w-220 text-18 uppercase tracking-20p my-50p rounded-6 mx-auto'><FontAwesomeIcon icon={faFile} className='mr-7'/> whitepaper</button>
    </div>
  );
}

export default Platform;