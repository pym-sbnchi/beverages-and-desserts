import React, { useEffect, useState } from "react";
import { useParams,useLocation} from "react-router-dom";
import "./style.css";
import ReactPlayer from "react-player";
export default function RecipesDetails() {
  const [data, setData] = useState("");
  const { id } = useParams();
  const location=useLocation()
  console.log(id)
  useEffect(() => {
    fetch(`https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "793e61b096msh0180bc0bcfc492bp1a3463jsna5f724afc1c4",
        "X-RapidAPI-Host": 'tasty.p.rapidapi.com',
        'Content-type':'application/json'
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {data?<div className="ver-card">
      
      <video src={`${data?.original_video_url}`} autoPlay controls>
        
      </video>
      <div className="">
        <h2>{data?.name}</h2>
        <p>{data?.description}</p>
      </div>
    </div>:<p>loading....</p>}
    </>
  );
}
