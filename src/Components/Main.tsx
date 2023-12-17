import { SetStateAction, useState } from 'react';
import { getData } from '../Axios';

import Food from './Food';
import DishTypeSelector from './DishTypeSelector';

const Main = () => {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [dishType, setDishType] = useState([""]);
    const [recipes, setRecipes] = useState([]);

    let fetchedRecipes: any = [];

    const handleRecipeSearch = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();


        if (recipeName != "") {

            fetchedRecipes = await getData(recipeName).then((res) => { return res; }).catch((err) => { console.log(err) });

            setRecipes(fetchedRecipes || []);
        }

        setRecipeName('');
        setIngredients('');
        setDishType([]);
    };

    const handleDishTypeChange = (selectedDishType: string) => {
        console.log('Updating dishType:', "askdjlkasd");
        setDishType([selectedDishType]);
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
                        <label className="label">Ingredients</label>
                        <div className="control">
                            <textarea
                                className="textarea"
                                value={ingredients}
                                onChange={(e) => setIngredients(e.target.value)}
                                rows={4} // Set the number of rows according to your preference
                                placeholder="Enter ingredients, one per line"
                            />
                        </div>
                    </div>


                    <div className="field">
                        <div className="control">
                            <DishTypeSelector setDish={function (selectedDishType: string): void {
                                throw new Error('Function not implemented.');
                            } }  />
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
                                        ingredients={transformedRecipe.ingredients || ['bacon', 'bacon', 'bacon']}
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
