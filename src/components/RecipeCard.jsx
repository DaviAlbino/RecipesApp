import React from 'react';
import PropTypes from 'prop-types';

const RecipeCard = (props) => {
  const { img, name, key, index } = props;
  // key recebe id2
  return (

    <div data-testid={ `${index}-recipe-card` }>
      <img src={ img } alt={ name } data-testid={ `${index}-card-img` } />
      <p data-testid={ `${index}-card-name` }>{name}</p>
    </div>
  );
};

RecipeCard.propTypes = {
  index: PropTypes.number,
  img: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default RecipeCard;
