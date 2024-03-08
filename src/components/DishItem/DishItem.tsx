import React from 'react';
import { Dish } from '../../types';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deleteDish, fetchDishes } from '../../store/dishesSlice/dishesThunks';
import { selectDishesDeleteId } from '../../store/dishesSlice/dishesSlice';

const DishItem: React.FC<Dish> = ({ id, title, price, image }) => {
  const dispatch = useAppDispatch();
  const deleteId = useAppSelector(selectDishesDeleteId);
  const disabled = deleteId === id;
  const handleDelete = async (id: string) => {
    const adminConfirmed = confirm('Delete this dish from list?');
    if (adminConfirmed) {
      await dispatch(deleteDish(id));
      await dispatch(fetchDishes());
    }
  };

  return (
    <div className='card mb-3'>
      <div className='card-body'>
        <div className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
          <div className='mb-3 mb-md-0'>
            <img src={image} alt='dish image' className='dish-image me-2' />
            <h4 className='card-title d-inline-block'>{title}</h4>
          </div>
          <div>
            <span className='fw-bold'>{price} KGS</span>
            <Link
              to={`/admin/dishes/edit/${id}`}
              className='btn btn-outline-dark ms-4 me-2'
            >
              Edit
            </Link>
            <button
              className='btn btn-outline-danger'
              disabled={disabled}
              onClick={() => handleDelete(id)}
            >
              {disabled ? (
                <>
                  <span
                    className='spinner-border spinner-border-sm'
                    aria-hidden='true'
                  ></span>
                  <span className='visually-hidden' role='status'>
                    Loading...
                  </span>
                </>
              ) : (
                'Delete'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishItem;
