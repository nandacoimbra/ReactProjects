
import './Global.styles.css'
import styles from './components/App.module.css'
import { Header } from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import { Posts } from './components/Posts.jsx'


function App() {
  return (
   
      <div>
        <Header />
        <div className={styles.wrapper}>

          <Sidebar/>


          <main>
            <Posts
            />
            <Posts 
            />
          </main>
        </div>
      </div>
    
  )
}

export default App
