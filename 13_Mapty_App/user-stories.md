**User Story**: Description of the application's functionality from the user's perspective.

**Common format**: As a **_[type of user],_** I want **_[an action]_** so that **_[a benefit]_**

### User Stories and Features

1. As a user, I want to log my running workouts with location, distance, time, pace and steps/minute, so I can keep a log of all my running.
   > - Map where user clicks to add new workout (best way to get location coordinates)
   > - Geolocation to display map at current location (more user friendly)
   > - Form to input distance, time, pace, steps/minute
2. As a user, I want to log my cycling workouts with location, distance, time, speed and elevation gain, so I can keep a log of all my cycling.
   > Form to input distance, time, speed, elevation gain
3. As a user, I want to see all my workouts at a glance, so I can easily track my progress over time.
   > Display all workouts in a list
4. As a user, I want to also see my workouts on a map, so I can easily check where I work out the most
   > Displays all workouts on the map
5. As a user, I want to see all my workouts when I leave the app and come back later, so that I can keep using there app over time.
   > - Store workout data in the browser using local storage API
   > - On page load, read the saved data from local storage and display
