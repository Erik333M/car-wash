import React,{useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Sidebar from "react-sidebar"
import SidebarContent from './sidebar/Sidebar'
import './home.scss'

const Home = () => {
    const [openBar,setOpenBar] = useState(false)
    const [btnText,setBtnText] = useState('GET MORE')
    const Cats = useSelector(state => state.cats)
    const Categoris = useSelector(state => state.categoris)
    const dispatch = useDispatch()
    useEffect(() =>{ 
        const getCats = async () =>{
            const cats = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1')
            const res = await cats.json()
            dispatch({type:'addCats',payload:res})
        }
        const getCategoris = async () => {
            const categoris = await fetch("https://api.thecatapi.com/v1/categories")
            const res = await categoris.json()
            dispatch({type:'addCategoris',payload:res})
        }
        getCategoris()
        getCats()
    },[dispatch])
    const handleClick = async () =>{
        setBtnText("LOADING..")
        const more = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1')
        const res = await more.json()
        dispatch({type:'addMore',payload:res})
        setBtnText("GET MORE")
    }
    const toggleBar = () => {
        setOpenBar(state => !state)
    }
  return (
    <div className='home-container'>
            <h1>Hi cats lover</h1>
            <Sidebar
                sidebar={<SidebarContent categoris={Categoris}/>}
                open={openBar}
                onSetOpen={toggleBar}
                pullRight={true}
            >
            <button className='sideBarButton' onClick={toggleBar}>
                Side
            </button>
        </Sidebar>
        <div className='home-container__cats'>
        {Cats.length?Cats.map((cat,i) => {
            return <div key={cat.id} className={`cat-${i+1} home-container__cats__cat`}>
                <img src={cat.url} alt="Alergic on cats"/>
            </div>
        }):null}
        </div>
        <button className='getMore-btn' onClick={handleClick}>
            {btnText}
        </button>
    </div>
  )
}

export default Home
