import axios from 'axios'
import React from 'react'
import {useState} from "react"
import './imgUpload.scss'

function ImageUpload() {
    const [image, setImage] = useState('')

    function handleImage(e) {
        console.log(e.target.file)
        setImage(e.target.files[0])
    }
    function handleApi() {
        const formData = new formData()
        formData.append('image', image)
        axios.post('url', formData).then((res) => { 
            console.log(res)
        })
        
    }
  return (
    <div className='file_card'>
        <div className="file_inputs">
        <input type="file" name = "file"  onChange ={handleImage}/>
        <button onClick = {handleApi}>upload</button>
        </div>
        <p className="main">
            Supported files
        </p>
        <p className="info">
            JPEG, PNG, JPG and all picture formats
        </p>
    </div>
  )
}

export default ImageUpload
