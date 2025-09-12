function displayRecipe(response){
  const lines = response.data.answer
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((line) => `<li>${line}</li>`)
    .join("");

  const formatted = `<ul>${lines}</ul>`;



    new Typewriter('#recipe-output', {
  strings: formatted,
  autoStart: true,
  delay: 1,
  cursor: "",
  deleteSpeed: 1,
  });
}

  function generateRecipe(event){
    event.preventDefault();
    
    let ingredientsInput = document.querySelector("#ingredients");

    let prompt = `Generate a detailed recipe with step-by-step instructions based on the following ingredients:${ingredientsInput.value}`;
    let context = "You are a professional chef and recipe developer. Provide clear and concise cooking instructions in no more than 10 lines. Provide each instruction on a new line and do not include the name of the recipe.";
    let apiKey = "739f904148cfa8boc86t8a8b426aac3f";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    

    axios.get(apiUrl).then(displayRecipe);

              
}
let recipeFormElement = document.querySelector("#search-engine");
recipeFormElement.addEventListener("submit", generateRecipe);