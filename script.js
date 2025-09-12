function generateRecipe(event){
    event.preventDefault();

    new Typewriter('#recipe-output', {
  strings: ['Melt butter in a large pot over medium heat. Add onion and celery and cook until just tender, about 5 minutes.'],
  autoStart: true,
  delay: 1,
  cursor: "",
  deleteSpeed: 1,
  });
    
    
            
}
let recipeFormElement = document.querySelector("#search-engine");
recipeFormElement.addEventListener("submit", generateRecipe);