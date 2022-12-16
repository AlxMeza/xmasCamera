import React, { useState } from 'react'
import Webcam from 'react-webcam'
import domtoimage from 'dom-to-image'
import { Link } from 'wouter'

const videoConstraints = {
  width: 720,
  height: 720,
  facingMode: "user",
}
 
export default function Frame () {
  const [captureState, setCaptureState] = useState(false)

  const webcamRef = React.useRef(null)
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    const photo = document.getElementById('photo');
    photo.innerHTML = `
      <img src="assets/frame1.svg" style="z-index: 2; width: 720px; position:absolute;" />
      <img src="${imageSrc}" style="z-index: 1; position:absolute;"/>
    `
    setCaptureState(true)
  }, [webcamRef])

  const savePicture = () => {
    let contenido = document.getElementById('photo')
    domtoimage.toPng(contenido).then(function (dataUrl) {
      let link = document.createElement('a')
      link.download = 'my-image-name.png'
      link.href = dataUrl
      link.click()

      contenido.innerHTML = ''
      setCaptureState(false)
      let link2 = document.createElement('a')
      link2.href = '#camera'
      link2.click()
    })
  }
  
  return(
    <>
      <div>
        <section id='camera' className='bg-red-300 my-5 px-20 py-10 w-10/12 rounded-lg mx-auto'>
          <div className='grid justify-items-center'>
            <section>
              <div className='h-[720px] w-[720px] absolute flex items-end'><img src='assets/frame1.svg' alt='frame1'/></div>
              <Webcam audio={false} height={720} ref={webcamRef} screenshotFormat='image/jpeg' width={720} videoConstraints={videoConstraints}/>
            </section>
            <section className='grid grid-cols-2 gap-4'>
              <button className='px-10 py-2 my-5 text-lg bg-emerald-500 hover:bg-emerald-400 hover:ring-2 hover:ring-pink-50 rounded-md text-white'
              onClick={capture}>Take a Picture</button>
              <Link to='/' className='px-10 py-2 my-5 text-lg bg-blue-500 hover:bg-blue-400 hover:ring-2 hover:ring-pink-50 rounded-md text-white' >Back to the menu</Link>
            </section>
          </div>
        </section>

        <section className='my-5 px-20 py-20 w-2/4 mx-auto'>
          <div id='photo' className='relative w-[760px] h-[760px]'>
          </div>
          <div className={ captureState ? 'block grid justify-items-center' : 'hidden'} >
            <button className='px-10 py-2 my-5 text-lg bg-emerald-500 hover:bg-emerald-400 hover:ring-2 hover:ring-pink-50 rounded-md text-white'
              onClick={savePicture}>Save Picture</button>
          </div>
        </section>
      </div>
    </>
  )
}