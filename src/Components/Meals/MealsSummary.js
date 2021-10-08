import React from 'react';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delecious Food, Delivered To You</h2>
      <p>
        Choose your favourite meal from out broad selection of avaailable meals
        and enjoy a delecious lunch or dinner at home
      </p>

      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs
      </p>
    </section>
  );
};

export default MealsSummary;
