/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import './home.css';
import Sidebar from "../../Components/Sidebar/sidebar";
import Feed from  '../../Components/Feed/feed'

const Home = ({sidebar}) => {
  return(
    <>
      <Sidebar sidebar={sidebar}/>
      <div className={`container ${sidebar?"":"large-container"}`}> 
        <Feed/>
      </div>
    </>
  )
}

export default Home;