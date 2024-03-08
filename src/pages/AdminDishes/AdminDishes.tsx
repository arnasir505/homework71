import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectDishes,
  selectDishesLoading,
} from '../../store/dishesSlice/dishesSlice';
import DishItem from '../../components/AdminDishItem/AdminDishItem';
import { fetchDishes } from '../../store/dishesSlice/dishesThunks';
import Spinner from '../../components/Spinner/Spinner';

const AdminDishes: React.FC = () => {
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  const isLoading = useAppSelector(selectDishesLoading);

  const getDishes = useCallback(async () => {
    void dispatch(fetchDishes());
  }, [dispatch]);

  useEffect(() => {
    getDishes();
  }, [getDishes]);

  let content = <Spinner />;

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
      <h2 className='text-center pt-5 text-secondary'>
        Dishes list is empty.
        <br />
        <Link to={'/admin/new-dish'}>Click here</Link> to add dish
      </h2>
    );
  }
  return (
    <div className='container pt-4'>
      <div className='d-flex justify-content-between align-items-center'>
        <h1 className='m-0'>Dishes</h1>
        <Link to={'/admin/new-dish'} className='btn btn-outline-dark'>
          Add new dish
        </Link>
      </div>
      <div className='pt-4'>
        <div className='row'>
          <div className='col-lg-10 col-xl-8 col-xxl-7'>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDishes;
