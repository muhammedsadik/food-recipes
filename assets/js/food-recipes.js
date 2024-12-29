const invalidEntry = "Invalid Entry, Try again.";
const alreadyExist = "Your input already exist.";
const exitRecipes = "You exited the food recipes storage.";
const recipesInputMsg = "İptal: Exist\n\nEnter a food recipes:";
const successfullyAdded = "Successfully added";
let foodRecipes = [];

if (localStorage.foodRecipes) {
  foodRecipes = JSON.parse(localStorage.foodRecipes);
}


function recipesInput() {
  let recipes = prompt(recipesInputMsg);

  if (recipes === null) {
    return false;
  }

  recipes = recipes.trim();

  if (!recipes) {
    alert(invalidEntry);
    return recipesInput();
  }

  if (foodRecipes.includes(recipes)) {
    alert(alreadyExist);
    return recipesInput();
  }

  foodRecipes.push( recipes );

  localStorage.foodRecipes = JSON.stringify(foodRecipes);
  return true;
}


function mainMenu() {

  if (foodRecipes.length > 0) {
    let recipiesList = foodRecipes.map((r, index) => `${index + 1} - Recipes: ${r}`).join("\n");
    alert(recipiesList);
  }

  if (!recipesInput()) {
    alert(exitRecipes);
  }
  alert(successfullyAdded);
}

mainMenu();