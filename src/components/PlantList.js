import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const allPlants = plants.map(plant => 
    <PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price}/>)

  return (
    <ul className="cards">{allPlants}</ul>
  )

}
export default PlantList;