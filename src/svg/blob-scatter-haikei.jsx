import React, { useEffect } from "react";
import KUTE from 'kute.js'

function BlobBackground() {

  useEffect(() => {
  const tween = KUTE.fromTo(
    '#blob1',
    {path: '#blob1', translate:['51', '416']},
    {path: '#blob2', translate:['368', '50']},
    {repeat:'999', duration:'8000', yoyo:true}
  )
  const tween2 = KUTE.fromTo(
    '#blob2',
    {path: '#blob2', translate:['368', '144']},
    {path: '#blob3', translate:['560', '432']},
    {repeat:'999', duration:'8000', yoyo:true}
  )
  const tween3 = KUTE.fromTo(
    '#blob3',
    {path: '#blob3',  translate:['560', '432']},
    {path: '#blob4',  translate:['864', '256']},
    {repeat:'999', duration:'9000', yoyo:true}
  )
  const tween4 = KUTE.fromTo(
    '#blob4',
    {path: '#blob4', translate:['864', '256']},
    {path: '#blob1', translate:['51', '416']},
    {repeat:'999', duration:'8000', yoyo:true}
  )
  tween.start()
  tween2.start()
  tween3.start()
  tween4.start()
}, [])

  return (
    <svg
    className='position-absolute vh-100 vw-100'
     style={{zIndex:'-1'}}
      xmlns="http://www.w3.org/2000/svg"
      width="960"
      height="540"
      version="1.1"
      viewBox="0 0 960 540"
    >
      <path fill="#931F1F" d="M0 0H960V540H0z"></path>
      <path
        id='blob1' 
        style={{transform:'translate(51px, 26rem)',}}
        fill="#F7760E"
        d="M48.8-66c18.3 23.2 39.5 34.9 43.6 50.8C96.5.6 83.3 20.6 70.2 37.9 57.1 55.3 44 70 26.8 78.4c-17.2 8.3-38.5 10.2-63.9 7.8-25.4-2.5-55-9.2-67.1-27.4-12.1-18.2-6.8-47.8-1.1-76.9 5.8-29 11.9-57.5 29.5-80.8 17.6-23.3 46.7-41.3 68.9-33.1 22.2 8.2 37.4 42.8 55.7 66z"
        transform="translate(267 250)"
      ></path>
      <path
        id='blob2'
        style={{transform:'translate(23rem, 9rem)',}}
        fill="#F7760E"
        d="M54.7-66.3C66-55.7 67-33.8 78.4-8.1c11.4 25.8 33.2 55.5 29.9 79.6-3.2 24.1-31.6 42.7-59.1 44.2-27.4 1.5-54-14.1-87.7-21.4C-72.3 87-113.2 88-132 69.5c-18.7-18.6-15.3-56.7.7-83.2 15.9-26.4 44.4-41.1 68.4-49.5 24-8.4 43.4-10.5 64-11.8 20.6-1.4 42.3-1.9 53.6 8.7z"
        transform="translate(201 211)"
      ></path>
      <path
        id='blob3'
        style={{transform:'translate(54rem, 16rem)',}}
        fill="#F7760E"
        d="M68.4-70.7c23.1 8.6 46.7 27.4 48.7 48.6 2 21.2-17.5 44.8-33.1 69.5C68.4 72.1 56.7 98 35.1 113.2c-21.7 15.2-53.4 19.7-70.6 4.6-17.3-15-20.1-49.5-25.9-74.9C-67.2 17.5-76 1.3-75.7-15.6c.3-16.9 9.6-34.5 23.7-44.6 14.1-10.1 33.1-12.8 53.9-15 20.8-2.2 43.4-4 66.5 4.5z"
        transform="translate(766 316)"
      ></path>
      <path
        id='blob4'
        style={{transform:'translate(35rem, 27rem)',}}
        fill="#F7760E"
        d="M44.6-49.2c13.5 7.4 25.1 21.1 28 36.5 2.9 15.4-3 32.5-11.8 48-8.7 15.6-20.4 29.6-37.1 40.3C6.9 86.2-14.9 93.5-31.7 87.3c-16.9-6.2-28.9-25.8-41.8-45.9C-86.4 21.2-100.2.6-96.2-16.1c4-16.6 25.8-29.2 44.8-35.6 19-6.4 35.2-6.7 51.1-6.3 15.8.4 31.3 1.4 44.9 8.8z"
        transform="translate(764 261)"
      ></path>
    </svg>
  );
}

export default BlobBackground;
