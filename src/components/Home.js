import React from 'react'
import Gallery from './Gallery'
import Slider from './Slider'
import Photos from './Photos'
import {NavLink, Route, Switch} from 'react-router-dom'

const renderHomeNavigation = () => {
    const navItems = [
      {
        path: '/home/portraits',
        text: 'Portraits'
      },
      {
        path: '/home/wedding',
        text: 'Weddings'
      },
      {
        path: '/home/food',
        text: 'Food'
      },
      {
        path: '/home/products',
        text: 'products'
      }
    ]

    return navItems.map(item => {
      const { path, text } = item;
      return (
        <li key={path}>
          <NavLink
            onClick={() => window.scroll(0,900)}
            activeClassName='active'
            to={path}
          >
            {text}
          </NavLink>
        </li>
      )
    })
}

function Home ({match}) {
  return (
    <div className='container'>

      <Slider />

      <div className="category-nav">
        <ul>
          {renderHomeNavigation()}
        </ul>
      </div>

      <div className="gallery">
        <Switch>
          <Route exact path="/home/general" component={Gallery} />
          <Route exact path="/home/portraits" component={Gallery} />
          <Route exact path="/home/wedding" component={Gallery} />
          <Route exact path="/home/real-estate" component={Gallery} />
          <Route exact path="/home/food" component={Gallery} />
          <Route exact path="/home/products" component={Gallery} />
        </Switch>
      </div>

      <style jsx>{`
        .container {
          height: 100%;
          width: 100%;
          overflow-x: hidden;
          background-color: black;
          color: white;
        }

        section {
          margin-top: 50px;
        }

        .gallery {
          display: flex;
        }

        .ReactGridGallery {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .category-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 50px;
          padding-bottom: 50px;
        }

        .category-nav ul  {
          display: flex;
          color: white;
          list-style: none;
        }

        .category-nav li {
          margin-right: 15px;

        }

        .category-nav ul li a {
          font-size: 2em;
        }

        .category-nav ul li a:hover {
          color: skyblue;
        }

        active {
          color: skyblue;
          font-weight: bold;
        }

        @media (max-width: 500px) {
          .category-nav ul li a {
            font-size: 1.3em;
          }
        }

      `}</style>
    </div>
  )
}

export default Home
