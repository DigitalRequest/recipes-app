import React, { useState } from 'react';

interface DishTypeSelectorProps {
    setDish: (selectedDishType: string) => void;
}

const DishTypeSelector: React.FC<DishTypeSelectorProps> = ({ setDish }) => {
    const [dishType, setDishType] = useState("");

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

    const handleButtonClick = (selectedDishType: string) => {
        setDishType(selectedDishType);
    };

    return (
        <div className="field">
            <label className="label">Dish Type</label>
            <div className="control">
                <div className="buttons has-addons is-flex g-0">
                    {dishTypes.map((type) => (
                        <button
                            type="button"
                            key={type}
                            className={`button ${dishType.includes(type) ? 'is-primary' : ''}`}
                            onClick={() => handleButtonClick(type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DishTypeSelector;
