## Deliverables

[X] - When the app starts, I can see all plants.

[] - I can add a new plant to the page by submitting the form.

[X] - I can mark a plant as "out of stock".

[X] - I can search for plants by their name and see a filtered list of plants.

## Component hierarchy

-App
    -Header
    -PlantPage
        -NewPlantForm
        -Search
        -PlantList
            -PlantCard

## Data structure

```javascript
"plants": [
    {
      "id": 1,
      "name": "Aloe",
      "image": "./images/aloe.jpg",
      "price": 15.99
    },{...}
```