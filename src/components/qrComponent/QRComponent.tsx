import React from 'react'
import './qrComponent.css'
import assetQR from '../../assets/image-qr-code.png'

function QRComponent() {
  return (
    <div className="qr-container">
      <div className="qr-image-container">
        <img className="qr-image" src={assetQR} alt="QR code that redirects you to https://www.frontendmentor.io"/>
      </div>
      <div className="qr-text-container">
        <p className="head-text">Improve your front-end skills by building projects</p>
        <p className="sub-text">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  )
}

export default QRComponent;