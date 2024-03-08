import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Spinner from '../../components/Spinner/Spinner';
import {
  selectDishes,
  selectDishesLoading,
} from '../../store/dishesSlice/dishesSlice';
import { fetchDishes } from '../../store/dishesSlice/dishesThunks';
import DishItem from '../../components/DishItem/DishItem';
import BottomCart from '../../components/BottomCart/BottomCart';

const Dishes: React.FC = () => {
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  const isLoading = useAppSelector(selectDishesLoading);

  const getDishes = useCallback(async () => {
    void dispatch(fetchDishes());
  }, [dispatch]);

  useEffect(() => {
    getDishes();
  }, [getDishes]);

  let content = (
    <div className='position-absolute top-0 start-50 translate-middle'>
      <Spinner />
    </div>
  );

  if (dishes.length > 0 && !isLoading) {
    content = (
      <>
        {dishes.map((dish) => (
          <DishItem
            key={dish.id}
            id={dish.id}
            title={dish.title}
            price={dish.price}
            image={dish.image}
          />
        ))}
      </>
    );
  } else if (dishes.length === 0 && !isLoading) {
    content = (
      <h2 className='text-center pt-5 text-secondary'>Dishes list is empty.</h2>
    );
  }
  return (
    <div className='container py-5'>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mb-2 position-relative'>
        {content}
      </div>
      {!isLoading && <BottomCart />}
    </div>
  );
};

export default Dishes;
