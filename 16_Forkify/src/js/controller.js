const recipeContainer = document.querySelector(".recipe");

const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(
                new Error(`Request took too long! Timeout after ${s} second`),
            );
        }, s * 1000);
    });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async function () {
    try {
        const res = await fetch();
        // BASE_URL from .env
        const data = await res.json();

        if (!res.ok) throw new Error(`${data.message} (${data.status})`);
        console.log(res, data);
        let { recipe } = data.data;
        recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.sourceUrl,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients,
        };
        console.log(recipe);
    } catch (err) {
        alert(err);
    }
};

showRecipe();
