import React from "react";
export default function Card({img,title,des,id}) {
  return (
    <div class="card" style={{width: '18rem'}}>
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">
          {des.slice(0,20)}
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
