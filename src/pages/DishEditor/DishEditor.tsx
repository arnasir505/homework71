import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { updateForm } from '../../store/dishFormSlice/dishFormSlice';

const DishEditor: React.FC = () => {
  const dispatch = useAppDispatch();

  const [form, setForm] = useState({
    title: '',
    price: '',
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      updateForm({
        ...form,
        price: Number(form.price),
      })
    );
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
                value={form.title}
                onChange={(e) => handleChange(e)}
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
                value={form.price}
                onChange={(e) => handleChange(e)}
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
                value={form.image}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button type='submit' className='btn btn-outline-dark'>
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DishEditor;
