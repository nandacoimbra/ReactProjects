import { Routes, Route } from 'react-router-dom';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Home } from './components/Home.jsx'
import { About } from './components/About.jsx'
import { Footer } from './components/Footer.jsx'
import './App.css'
// import './styles.global.css'

function App() {


  return (

    <div>

      <div>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/' element={<About />} />
          <Route path='/components/Footer.jsx' element={<Footer />} />

        </Routes>
      </div>

      <hr />
      <hr />

      <div>
        <h2>Sobre Nós</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, voluptates quisquam nostrum amet, placeat ipsum molestias quae nemo fugiat esse labore consequatur iure, tempore veritatis incidunt eaque earum debitis totam.</p>
      </div>

      <footer>

        <h5>Contato</h5>
      </footer>

    </div>

  )
}

export default App
