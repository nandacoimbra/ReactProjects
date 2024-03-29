
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Missao from './components/Missao';
import Historia from './components/Historia'
import Produtos from './components/Produtos'
import Contato from './components/Contato'
import Footer from './components/Footer';


export default function App() {


  return (
    <div className='corpo'>
      
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home name='Home'></Home>} />
          <Route path='/missao' element={<Missao name='Missao'></Missao>} />
          <Route path='/historia' element={<Historia name='Nossa Historia'></Historia>} />
          <Route path='/produtos' element={<Produtos name='Produtos'></Produtos>} />
          <Route path='/contatos' element={<Contato name='Contato'></Contato>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}


