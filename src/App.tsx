import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AdminDishes from './pages/AdminDishes/AdminDishes';
import AdminOrders from './pages/AdminOrders/AdminOrders';
import NotFound from './components/NotFound/NotFound';
import DishEditor from './pages/DishEditor/DishEditor';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/admin/dishes' element={<AdminDishes />} />
        <Route path='/admin/orders' element={<AdminOrders />} />
        <Route path='/admin/new-dish' element={<DishEditor />} />
        <Route path='/admin/dishes/edit/:id' element={<DishEditor />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
