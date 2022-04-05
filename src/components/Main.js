import React,{useEffect,useState} from 'react'
import {getAuthors} from '../utils/getData'

function Main() {
    const [authors, setAuthors] = useState([])

useEffect(()=>{
    console.log("Main component did mount");
    getAuthors()

},[])

  return (
    <div>Main</div>
  )
}

export default Main