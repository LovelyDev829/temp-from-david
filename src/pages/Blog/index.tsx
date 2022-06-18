import { useState } from "react";
import Nbutton from "../../components/Nbutton";
import { BlogInfos } from "../../core/data/bloginfo";
import BlogItem from "./BlogItem";
import BlogPopUpModal from "./Blogpopup";
import { BlogProps } from "../../core/interfaces/pages";
const Blog = () => {
  const activeBtnStyle = 'mr-10 bg-texasRose text-white hover:bg-white hover:text-texasRose border-texasRose';
  const deactiveBtnStyle = 'mr-10 bg-desertStorm text-cloudygrey hover:bg-white hover:text-texasRose border-desertStorm';

  const [artbtn, setArtbtn] = useState(true);
  const [techbtn, setTechbtn] = useState(false);
  const [crypbtn, setCrypbtn] = useState(true);
  const [landbtn, setLandbtn] = useState(false);
  const filterClick = (type:string, current: boolean) =>{
    switch(type){
      case 'art':
        if ( current )
          setArtbtn(false);
        else
          setArtbtn(true);
        break;
      case 'tech':
        if ( current )
          setTechbtn(false);
        else
          setTechbtn(true);
        break;
      case 'crypto':
        if ( current )
          setCrypbtn(false);
        else
          setCrypbtn(true);
        break;
      case 'land':
        if ( current )
          setLandbtn(false);
        else
          setLandbtn(true);
        break;
    }
  }
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(BlogInfos[0]);
  const showModal = (item:BlogProps) =>{
    setModalShow(true);
    setModalData(item);
  }
  return (
    <div className="mt-82 font-Rajdhani text-texasRose ">
      <div className="flex justify-center text-45 leading-50 tracking-3p"><span>BLOGS</span></div>
      <div className="my-18 primary:mx-121 lg:mx-81 sm:ms-61">
        <span className="font-semibold mr-10p">CATEGORIES : </span>
        <Nbutton class={artbtn ? activeBtnStyle : deactiveBtnStyle} onClick={()=>filterClick("art", artbtn)}> #ART </Nbutton>
        <Nbutton class={techbtn ? activeBtnStyle : deactiveBtnStyle} onClick={()=>filterClick("tech", techbtn)}> #technology </Nbutton>
        <Nbutton class={crypbtn ? activeBtnStyle : deactiveBtnStyle} onClick={()=>filterClick("crypto", crypbtn)}> #crypto </Nbutton>
        <Nbutton class={landbtn ? activeBtnStyle : deactiveBtnStyle} onClick={()=>filterClick("land", landbtn)}> #land </Nbutton>

      </div>
      <div className="primary:mx-110 lg:mx-70 sm:ms-50  flex flex-wrap justify-between">
        {
          BlogInfos.map((blog, index) => {
            return <div key={index} onClick={()=>showModal(blog)}><BlogItem item={blog} key={index} index={index}></BlogItem></div>;
          })
        }
      </div>

      <BlogPopUpModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        item = {modalData}
      />
    </div>
  );
}

export default Blog;