import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar.jsx'
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import Read from './components/Read';
import Create from './components/Create';


function App() {
  

  return (
    <div>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path='/' element={<Content></Content>}></Route>
        <Route path='/read' element={<Read></Read>}></Route>
        <Route path='/create' element={<Create></Create>}></Route>
        </Routes>
      {/* <Header></Header>
     <Content></Content>
    <Footer></Footer> */}
    </div>

  )
}

export default App
