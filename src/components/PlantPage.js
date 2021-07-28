import React, { useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const plantUrl = "http://localhost:6001/plants"

function PlantPage() {
  const [ plants, setPlants ] = useState([])
  const [ search, setSearch ] = useState("")

  function handleAddPlant(newPlant){
    const updatedPlants = [...plants, newPlant]
    setPlants(updatedPlants)
  }


  useEffect(() => {
    fetch(plantUrl)
    .then(res => res.json())
    .then(setPlants)
  }, [])

  console.log(plants)

  const searchedPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={searchedPlants}/>
    </main>
  );
}

export default PlantPage;
