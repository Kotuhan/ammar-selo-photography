import React from 'react'
import Gallery from './Gallery'
import Slider from './Slider'
import Photos from './Photos'

function Home () {
  return (
    <div className='container'>

      <Slider />


      <section>
        <h1>Gallery</h1>
      </section>

      <section>

        <Gallery />
      </section>

      <style jsx>{`
        .container {
          height: 100%;
          width: 100%;
          overflow-x: hidden;
          overflow-y: hidden;
        }

        section {
          margin-top: 50px;
        }

      `}</style>
    </div>
  )
}

export default Home
