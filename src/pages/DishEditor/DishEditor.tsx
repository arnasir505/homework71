import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  clearForm,
  selectDishForm,
  selectDishFormLoading,
  updateImage,
  updatePrice,
  updateTitle,
} from '../../store/dishFormSlice/dishFormSlice';
import {
  addDish,
  fetchDishForm,
  updateDish,
} from '../../store/dishFormSlice/dishFormThunks';
import { useNavigate, useParams } from 'react-router-dom';
import dishPlaceholder from '../../assets/dishPlaceholder.svg';

const DishEditor: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const dishForm = useAppSelector(selectDishForm);
  const isLoading = useAppSelector(selectDishFormLoading);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (params.id) {
      await dispatch(updateDish(params.id));
    } else {
      await dispatch(addDish(dishForm));
    }
    dispatch(clearForm());
    navigate('/admin/dishes');
  };

  const getDishForm = useCallback(async () => {
    try {
      if (params.id) {
        await dispatch(fetchDishForm(params.id)).unwrap();
      } else {
        dispatch(clearForm());
      }
    } catch (error) {
      navigate('/404', { replace: true });
    }
  }, [params.id, dispatch, navigate]);

  useEffect(() => {
    void getDishForm();
  }, [getDishForm]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 pt-4'>
          <h1 className='mb-4'>{params.id ? 'Edit dish' : 'Add new dish'}</h1>
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
            <div className='mb-4'>
              <p>Image preview:</p>
              <img
                src={dishForm.image || dishPlaceholder}
                alt='preview'
                className='dish-image'
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
                  Save
                </>
              ) : (
                'Save'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DishEditor;
