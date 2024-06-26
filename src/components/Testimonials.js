import React from 'react'
import "./Testimonials.css";
import {testimonialsData} from "../components/data/testimonialsData"
import { useState } from "react";
import leftArrow from "../assets/leftArrow.png"
import rightArrow from "../assets/rightArrow.png";
const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
  return (
    <div className='Testimonials' id='testimonials'>

        <div className='left-t'>
            <span>Testimonials </span>
            <span className='stroke-text'>WHAT THEY </span>
            <span>SAY ABOUT US </span>
            <span>
            {testimonialsData[selected].review}
            </span>
            <span>
            <span style={{color:"var(--blue)"}}>
            {testimonialsData[selected].name}
            </span>  {" "}
            - {testimonialsData[selected].status}
            </span>

        </div>
        <div className='right-t'>
            <div></div>
            <div></div>
            <img src={testimonialsData[selected].image} alt="" />
            <div className='arrow'>
                <img onClick={()=>{
                    selected===0?setSelected(tLength-1):
                    setSelected((previous)=>previous-1);
                }} src={leftArrow} alt=""/>
                <img onClick={()=>{
                    selected=== tLength-1 ?setSelected(0):
                    setSelected((previous)=>previous+1);
                }} src={rightArrow} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Testimonials