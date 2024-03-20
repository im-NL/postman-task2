import React from 'react'
import { useState } from 'react';

export default function Image({src, width, size}) {
    const [loading, setLoading] = useState(true);
    return (
    <>
    <img className='card_img' src={src} style={
        {
            display: loading?"none":"block",
            animation: "fadeIn 0.5s",
        }
    } onLoad={(e)=>{setLoading(false)}}></img>
    <div className="loader" style={{
        display: loading?"block":"none",
        fontSize: size?size:"24px"
    }} >
    </div>
    </>
)}