import PropTypes from 'prop-types';

const Food = (props: any) => {
    return (
        <div className="column g-2" style={{width: "450px"}}>
            <div className="card-image">
                <figure className="image">
                    <img src={props.image} alt={props.title} />
                </figure>
            </div>
            <div className="card-content">
                <p className="title is-4">{props.title}</p>
                <div className="content">
                    <p>{props.description}</p>
                    <p>Ingredients:</p>
                    <ul>
                        {props.ingredients && props.ingredients.length > 4
                            ? props.ingredients.slice(0, 5).map((ingredient: string, index: number) => (
                                <li key={index}>{ingredient}</li>
                            ))
                            : props.ingredients.map((ingredient: string, index: number) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

Food.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Food;