
const recipeFinder = (query) => {
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=d37a4dd6&app_key=d6123723b602cd8851fa3c2f8b96f61e`)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        const recipes = data.hits;
        const recipeList = document.getElementById('root');
        recipeList.innerHTML = '';
        recipes.forEach((recipe) => {
            const item = document.createElement('li');
            item.innerText = recipe.recipe.label;
            recipeList.appendChild(item);
        })
    });
}

const grabValues = () => { //grab the values from the form
   const query = document.getElementById('search').value;
   recipeFinder(query);
  }

const button = document.getElementById('submit');

button.addEventListener('click', grabValues);



