import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectDishes } from '../../store/dishesSlice/dishesSlice';
import DishItem from '../../components/DishItem/DishItem';
import { fetchDishes } from '../../store/dishesSlice/dishesThunks';

const AdminDishes: React.FC = () => {
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);

  const getDishes = useCallback(async () => {
    void dispatch(fetchDishes());
  }, [dispatch]);

  useEffect(() => {
    getDishes();
  }, [getDishes]);

  return (
    <div className='container pt-4'>
      <div className='d-flex justify-content-between align-items-center'>
        <h1>Dishes</h1>
        <Link to={'/admin/new-dish'} className='btn btn-outline-dark'>
          Add new dish
        </Link>
      </div>
      <div className='pt-4'>
        {dishes.map((dish) => (
          <DishItem />
        ))}
      </div>
    </div>
  );
};

export default AdminDishes;
