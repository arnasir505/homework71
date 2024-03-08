import React from 'react';

const DishEditor: React.FC = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 pt-4'>
          <h1 className='mb-4'>Add new dish</h1>
          <form>
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
              />
            </div>
            <button className='btn btn-outline-dark'>Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DishEditor;
