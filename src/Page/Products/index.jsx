import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import { Dna } from "react-loader-spinner";
export default function Products() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://beverages-and-desserts.p.rapidapi.com/desserts", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "793e61b096msh0180bc0bcfc492bp1a3463jsna5f724afc1c4",
        "X-RapidAPI-Host": "beverages-and-desserts.p.rapidapi.com",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((dessert) => setData(dessert))
      .catch((err) => console.log(err));
  }, []);
  const items = data?.map((e, index) => (
    <Card key={index} title={e.name} img={e.img[1].lg} des={e.desc} id={e.id} />
  ));
  return (
    <>{!data ? <Dna /> : <div className="d-flex flex-wrap p-5">{items}</div>}</>
  );
}
