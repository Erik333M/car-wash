import React from 'react'
import {Routes,Route} from 'react-router-dom'
import  Home  from './components/home-component/Home'
import { useSelector } from 'react-redux'
import Cat from './components/cat-component/Cat'

const Routing = () => {
  const categoris = useSelector(state => state.categoris)
  return (
    <Routes>
      {categoris.length?categoris.map((e) => {
        return <Route exact path={e.name} element={<Cat id={e.id} name={e.name}/>} key={e.id}/>
      }):null}
      <Route exact path='/' element={<Home/>} />
    </Routes>
  )
}

export default Routing
