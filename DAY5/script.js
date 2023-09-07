const ele = document.getElementById("para")

//api link for recipes generate
const url = "https://api.spoonacular.com/recipes/random?apiKey=51b0ac40d2ef47379379226d23827830&includeNutrition"

//callback function results in console
const fetchData = (url, callback)=> {
    fetch(url)
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.log(error)); 
  }
  
  
  fetchData(url, processData => {
    
    console.log(processData.recipes[0]); 
  });


//async and await to fetch data

async function  getData()
{
    try
    {
        
        const data = await fetch(url)
        const jsonData = await data.json()
        const recipes = jsonData.recipes[0]
        
        return recipes
    }
    catch(error)
    {
        console.error("error Generated while Fetching :"+error)
        return 1
    }


}

//Dom Manupulation

async function showInHTML()
{
    const recipes = await getData()

    ele.innerHTML = `
    <div class="card">
    <div class="head">
    <div>
    <h3>${recipes.title}</h3>
    <div style="padding:10px">
    <div>
    <div>Cost :$${recipes.pricePerServing}</div>
    <div>Vegetarian :${recipes.vegetarian?" Yes":" No"}</div>
    <div>Cheap :${recipes.cheap?" Yes":" No"}</div>
    <div>Dairy Free :${recipes.dairyFree?" Yes":" No"}</div>
    <div>Gluten Free :${recipes.glutenFree?" Yes":" No"}</div>
    </div>
    </div>
    </div>

    <img src=${recipes.image} width="500" alt="Image">
    </div>
    <p>${recipes.summary}</p>
    <h2>Recipes</h2>
    <details>
            ${recipes.instructions}
    
        </details>
    </div>
    `
}

window.addEventListener("load",()=>{

    showInHTML()
})