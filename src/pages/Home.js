import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Card from '../components/Card'
import React, { useEffect, useState } from 'react';
export default function Home() {
  const [posts , setPosts] = useState([]);
  var i;
  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setPosts(json))
},[])
  return (
    <>
        {
          <Sidebar/>
        } 
        <div className='nav'>
          {
            <Navbar/> 
          }
           <Header/>
        </div> 
        <div className='main'>
           {
              posts.slice(0, 12).map((x , key)=>{ 
                  return <Card key={key}  img={x.thumbnailUrl} title={x.title}/>;
             })
           }
        </div>

    </>
  )
}


