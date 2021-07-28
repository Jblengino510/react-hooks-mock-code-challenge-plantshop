import React, { useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const plantUrl = "http://localhost:6001/plants"

function PlantPage() {
  const [ plants, setPlants ] = useState([])
  const [ search, setSearch ] = useState("")


  useEffect(() => {
    fetch(plantUrl)
    .then(res => res.json())
    .then(setPlants)
  }, [])

  console.log(plants)

  const searchedPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <main>
      <NewPlantForm />
      <Search setSearch={setSearch}/>
      <PlantList plants={searchedPlants}/>
    </main>
  );
}

export default PlantPage;
