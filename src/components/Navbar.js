import '../css/Navbar.css';

import {
    Link,
  } from "react-router-dom";
  

export default function Navbar(){
  return(
    <>
        <div className="navbar">
            <div className="heading">
                <img src="https://cdn-icons.flaticon.com/png/512/2537/premium/2537856.png?token=exp=1657178827~hmac=df38d8f762d296bb2afdd1a5aee09e1b" alt="" />
                Global News Network
            </div>
            <div className="icons">
                <a href="https://www.google.co.in/" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt=""/>
                </a>
                <a href="https://www.youtube.com/" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174883.png" alt=""/>
                </a>
                <a href="https://www.wikipedia.org/" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/48/48930.png?w=360" alt=""/>
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt=""/>
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""/>
                </a>
                <a href="https://www.instagram.com/?hl=en" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt=""/>
                </a>
            </div>
            <div className="category-box d-flex justify-content-evenly my-2">
                <Link className="word-search" to="/Science">Science</Link>
                <Link className="word-search" to="/Business">Business</Link>
                <Link className="word-search" to="/India">India</Link> 
                <Link className="word-search" to="/Sports">Sports</Link> 
                <Link className="word-search" to="/Bitcoin">Bitcoin</Link> 
                <Link className="word-search" to="/Entertainment">Entertainment</Link>
                <Link className="word-search" to="/Politics">Politics</Link> 
                <Link className="word-search" to="/Technology">Technology</Link>
                <Link className="word-search" to="/Health">Health</Link> 
                <Link className="word-search" to="/Tesla">Tesla</Link> 
                <Link className="word-search" to="/Jobs">Jobs</Link> 
                <Link className="word-search" to="/USA">USA</Link> 
            </div>   
        </div>
    </>
  )
}

