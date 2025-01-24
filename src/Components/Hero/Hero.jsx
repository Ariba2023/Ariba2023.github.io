import React from 'react'
import "./Hero.css"
import profile_img from '../../assets/Opentowork.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import pdf from '../../assets/Resume.pdf'
import { Document,Page,pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc=`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Ariba Junejo,</span> Laravel Developer based in Pakistan.</h1>
        <p>I'm Ariba Junejo , Laravel Developer</p>
        <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
      <div className='hero-resume' ><a href={pdf}>My Resume</a></div>  
      <a href={pdf}>Download</a>
      <Document file={ pdf} onLoadError={console.error}
    
      >
        <Page pageIndex={1}></Page>
        
      </Document>
   
        </div>
    </div>
  )
}

export default Hero