import React from 'react'

export default function Productlink({ url, title }) {// props ชื่อ url กับ title 
  return (
    <div>
        <a href={url}style={{textDecoration:'none', color:"white",padding:"6px 10px", borderRadius:"5px", backgroundColor:"green"}}>{title}</a>
    </div>
  )
}
