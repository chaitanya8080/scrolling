
import "./App.css"
import axios from "axios"
import { useState } from "react";



function App() {
 const [data, setData] = useState([])

 const getNews =()=>{
  axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=dd36b754cebe4126a138be676f59f6a6").then((res)=>{
  console.log(res)
  setData([...data, ...res.data.articles]);
})

 }

getNews();
   const handleScroll=(event)=>{
      const {scrollTop, clientHeight, scrollHeight} = event.currentTarget;
      
      if(scrollHeight - scrollTop === clientHeight){
        const getNews =()=>{
          axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=dd36b754cebe4126a138be676f59f6a6").then((res)=>{
          console.log(res)
          setData([...data, ...res.data.articles]);
        })
         }
         getNews();
      }
   }

  return (
    <div className="App">
    

          <div>
            <button onClick={getNews}  style={{
              margin:"auto",
              textAlign:"center",
              justifyContent:"center",
              height:"40px",
              width:"500px",
              backgroundcColor:"red",
              
            }}> get api</button>
          </div>

           < div className="container" onScroll={handleScroll} >   
               {
                     data.map((e)=>{
                     return (
                        <div className="row">
                          <img src={e.urlToImage}></img>
                        </div>
                     )
                     })      
               }
            
           </div>
    

    </div>
  );
}

export default App;
