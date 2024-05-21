/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './home.css';
import Sidebar from "../../Components/Sidebar/sidebar";
import Feed from  '../../Components/Feed/feed'

const Home = ({sidebar}) => {

  const [ category , setCategory ] = useState(0);


  return(
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
      <div className={`container ${sidebar?"":"large-container"}`}> 
        <Feed category={category}/>
      </div>
    </>
  )
}

export default Home;