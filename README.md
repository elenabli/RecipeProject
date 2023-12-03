# MealMix Recipe Selector

MealMix is a simple, user-friendly application designed to help you decide what to cook. MealMix can provide you with random recipes at the click of a button.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- **Random Recipe Selection**: With just a click, MealMix selects and displays 5 random recipes from its database. Didn't find what you're looking for? Just click again for a fresh set of delicious options.
- **Detailed Recipe Information**: Each recipe comes with a detailed list of ingredients required.
- **Shopping List**: This feature automatically add ingredients from recipes to a shopping list. Each ingredient in the list is displayed with a checkbox, allowing users to mark off items as they get them. 

## How to Use

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Inside the `frontend` folder, execute `npm install` to install all the necessary dependencies for the frontend of the application.
4. Run `npm start` to start the application. It will open in your default browser at `http://localhost:3000`.
5. Move to the `backend` folder using the terminal and run `npm install` to install the required dependencies for the backend.
6. Ensure you have access to MongoDB. Create a `.env` file in the `backend` folder to securely store the required configurations, including the PORT and MongoDB access credentials.

Example `.env` file:
```
PORT=your_chosen_port
MONGODB_URI=your_mongodb_uri
```

7. Run `npm run dev` to start the server. our application is now ready for development, and you can access it at the specified port.

Enjoy exploring new recipes with MealMix!