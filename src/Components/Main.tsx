import { useState } from 'react';
import { getData } from '../Axios';

import Food from './Food';
import DishTypeSelector from './DishTypeSelector';

const Main = () => {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState<number>(1);
    const [dishType, setDishType] = useState<string[]>([""]);
    const [recipes, setRecipes] = useState([]);

    const dishTypes = [
        "Alcohol Cocktail",
        "Biscuits and Cookies",
        "Bread",
        "Cereals",
        "Condiments and Sauces",
        "Desserts",
        "Drinks",
        "Egg",
        "Ice Cream and Custard",
        "Main Course",
        "Pancake",
        "Pasta",
        "Pastry",
        "Pies and Tarts",
        "Pizza",
        "Preps",
        "Preserve",
        "Salad",
        "Sandwiches",
        "Seafood",
        "Side Dish",
        "Soup",
        "Special Occasions",
        "Starter",
        "Sweets"
    ];

    let fetchedRecipes: any = [];

    const handleRecipeSearch = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        if (recipeName != "" || dishType.length > 0) {

            try {
                fetchedRecipes = await getData(recipeName, ingredients, dishType);

                console.log(fetchedRecipes);
                setRecipes(fetchedRecipes || []);
            } catch (err) {
                console.error(err);
            }
        }

        setRecipeName('');
        setIngredients(0);
        setDishType([]);
    };

    function extractProps(recipe: any) {

        return {
            title: recipe.label,
            image: recipe.image,
            description: recipe.source,
            ingredients: Array.isArray(recipe.ingredients)
                ? recipe.ingredients.map((ingredient: any) => ingredient.text)
                : [],
        };
    };

    return (
        <>
            <div className="container">
                <h1 className="title">Recipe Search</h1>
                <form onSubmit={(e) => handleRecipeSearch(e)}>
                    <div className="field">
                        <label className="label">Recipe Name</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                value={recipeName}
                                onChange={(e) => setRecipeName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Quantity of Ingredients</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={ingredients}
                                onChange={(e) => {
                                    const value = parseInt(e.target.value);
                                    if (!isNaN(value)) {
                                        setIngredients(value);
                                    }
                                }}
                                placeholder="Enter ingredients, one per line"
                            />
                        </div>
                    </div>


                    <div className="field">
                        <div className="control">
                            <div className="field">
                                <label className="label">Dish Type</label>
                                <div className="control">
                                    <div className="buttons has-addons g-0">
                                        {dishTypes.map((type) => (
                                            <DishTypeSelector key={type} dishType={type} onClick={() => {
                                                if (!dishType.includes(type)) {
                                                    setDishType([...dishType, type]);
                                                } else {
                                                    setDishType(dishType.filter(item => item !== type));
                                                }
                                            }} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="field">
                        <div className="control">
                            <button className="button is-primary" type="submit">Search Recipes</button>
                        </div>
                    </div>
                </form>
            </div>
            <section className="container is-fluid p-6">
                <div className="columns is-multiline is-justify-content-center">
                    {recipes.length > 0 && (
                        recipes.map((recipe: any, index: number) => {
                            // Call extractProps function to transform the recipe
                            const transformedRecipe = extractProps(recipe.recipe);

                            console.log(transformedRecipe);

                            return (
                                <div key={index}>
                                    <Food
                                        title={transformedRecipe.title}
                                        image={transformedRecipe.image}
                                        description={transformedRecipe.description}
                                        ingredients={transformedRecipe.ingredients}
                                    />
                                </div>
                            );
                        })
                    )}
                </div>
            </section>
        </>
    );
};

export default Main;
