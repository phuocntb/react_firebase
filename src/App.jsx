import React, { useState } from 'react'
import {uploadToFirebase} from './fb'
import './main.css'
export default function App() {
  const [imgReview, setImgReview] = useState("https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg")
  const [effect, setEffect] = useState(false);
  
  return (
    <div>
      {
        effect && (
          <div className="effect"></div>
        )
      }
      <h1>App</h1>
      Avatar<input onChange={async (e) => {
        if(e.target.files[0]) {
          let url = URL.createObjectURL(e.target.files[0])
          setImgReview(url)
          setEffect(true)
          let urlDb = await uploadToFirebase(e.target.files[0])
          setEffect(false)
          console.log("urlDb", urlDb)
        }
      }} type="file" />
      <img style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "1px solid #000",
      }} src={imgReview}/>
    </div>
  )
}
