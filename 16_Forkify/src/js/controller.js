import * as model from "./model";
import recipeView from "./views/recipeView";

import "core-js/stable";
import "regenerator-runtime/runtime";

const recipeContainer = document.querySelector(".recipe");

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
    try {
        // const id = window.location.hash.slice(1);
        const id = "5ed6604591c37cdc054bc886";

        if (!id) return;
        recipeView.renderSpinner();

        // 1. Loading the recipe
        await model.loadRecipe(id);

        // 2. Rendering recipe
        recipeView.render(model.state.recipe);
    } catch (err) {
        alert(err);
    }
};

["hashChange", "load"].forEach((ev) =>
    window.addEventListener(ev, controlRecipes),
);
