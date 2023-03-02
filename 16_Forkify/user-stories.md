**User Story**: Description of the application's functionality from the user's perspective.

**Common format**: As a **_[type of user],_** I want **_[an action]_** so that **_[a benefit]_**

### User Stories and Features

1. As a user, I want to **search for receipes,** so that I can find new ideas for meals.
    > - **Search functionality:** input field to send request to API with searched keywords.
    > - Display results with pagination.
    > - Display recipe with cooking time, servings and ingredients.
2. As a user, I want to be able to **update the number of servings,** so that I can cook a meal for different number of people.
    > **Change servings functionality:** update all ingredients according to current number of servings.
3. As a user, I want to **bookmark receipes,** so that I can review them later.
    > **Bookmarking functionality:** display list of all bookmarked recipes.
4. As a user, I want to be able to **create my own recipes,** so that I have them all in the same app
    > - User can upload own recipes.
    > - User recipes will automatically be bookmarked.
    > - User can only see their own recipes, not recipes from other users.
5. As a user, I want to **see my bookmarks and own recipes when I leave the app and come back later,** so that I can close the app safely after cooking.
    > - Store bookmark data in the browser using local storage.
    > - On page load, read the saved data from local storage and display.
