import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  clearForm,
  selectDishForm,
  selectDishFormLoading,
  updateImage,
  updatePrice,
  updateTitle,
} from '../../store/dishFormSlice/dishFormSlice';
import { addDish } from '../../store/dishFormSlice/dishFormThunks';
import { useNavigate } from 'react-router-dom';

const DishEditor: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const dishForm = useAppSelector(selectDishForm);
  const isLoading = useAppSelector(selectDishFormLoading);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(addDish(dishForm));
    dispatch(clearForm());
    navigate('/admin/dishes');
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 pt-4'>
          <h1 className='mb-4'>Add new dish</h1>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='title' className='form-label'>
                Title:
              </label>
              <input
                type='text'
                className='form-control'
                id='title'
                name='title'
                placeholder='Pepperoni'
                required
                autoComplete='on'
                value={dishForm.title}
                onChange={(e) => dispatch(updateTitle(e.target.value))}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='price' className='form-label'>
                Price:
              </label>
              <input
                type='number'
                className='form-control'
                id='price'
                name='price'
                placeholder='320'
                required
                autoComplete='on'
                value={dishForm.price || ''}
                onChange={(e) => dispatch(updatePrice(e.target.value))}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='image' className='form-label'>
                Image:
              </label>
              <input
                type='url'
                className='form-control'
                id='image'
                name='image'
                placeholder='https://images.com/photos/123456/pepperoni.jpeg'
                required
                autoComplete='on'
                value={dishForm.image}
                onChange={(e) => dispatch(updateImage(e.target.value))}
              />
            </div>
            <button
              className='btn btn-outline-dark'
              type='submit'
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span
                    className='spinner-border spinner-border-sm'
                    aria-hidden='true'
                  ></span>
                  <span className='visually-hidden' role='status'>
                    Loading...
                  </span>
                  Add
                </>
              ) : (
                'Add'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DishEditor;
