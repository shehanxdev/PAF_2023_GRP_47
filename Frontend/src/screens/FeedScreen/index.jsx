import React, { useEffect, useState } from "react";
import PostComponent from "./components/PostComponent/PostComponent";
import SideNavbar from "../../components/SideNavBar/SideNavbar";
import AddIcon from "@mui/icons-material/Add";
import { CircularProgress } from "@mui/material";

function FeedScreen() {
  const [post,setPost]=useState([])
  useEffect(()=>{
    async function fetchData(){
      axios.get("http://localhost:8080/api/post").then((response)=>{
        setPost([]);
        //TODO:: replace values with endpoints
      })
      .catch((error)=>{
        console.error(error)
      })
    }
    fetchData();
  },[]);

  
  return <div className="d-flex">
   
    <SideNavbar />
    <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1"><AddIcon color="primary"/><h1>ssss</h1></div>
  </div>;
}

export default FeedScreen;
