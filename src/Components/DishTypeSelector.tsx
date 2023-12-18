import React from 'react';

interface DishTypeSelectorProps {
    dishType: string,
    onClick?: () => void;
}

const DishTypeSelector: React.FC<DishTypeSelectorProps> = ({ dishType, onClick }) => {
    const handleButtonClick = (id: string) => {
        if (onClick) {
            onClick();

            let button = document.getElementById(id);

            if (button?.classList.contains("is-info")) {
                button?.classList.remove("is-info");
            } else {
                button?.classList.add("is-info");
            }
        }


        return dishType;
    };


    return (
        <button
            type="button"
            className={`button`}
            onClick={() => handleButtonClick("id" + dishType)}
            id={"id" + dishType}
        >
            {dishType}
        </button>
    );
};

export default DishTypeSelector;

