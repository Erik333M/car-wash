import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Cat = ({id,name}) => {
    const Images = useSelector(state => state.selected)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() =>{
        const changeCategori = async () =>{
            const cats = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${id}`)
            const res = await cats.json()
            dispatch({type:'changeCategori',payload:res})
        }
        changeCategori()
    },[])
    
  return (
    <div className='home-container'>
        <h1>{name}</h1>
        <div className='home-container__cats'>
        {Images.length?Images.map((cat,i) => {
            return <div key={cat.id} className={`cat-${i+1} home-container__cats__cat`}>
                <img src={cat.url} alt="Alergic on cats"/>
            </div>
        }):null}
        </div>
        <button className='getMore-btn' onClick={ () =>navigate("/")}>
            Home
        </button>
    </div>
  )
}

export default Cat