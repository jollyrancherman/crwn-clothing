import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import Authorization from './routes/authorization/authorization.component';
import CheckOut from './routes/check-out/check-out.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/authorization' element={<Authorization />} />
        <Route path='/shop/*' element={<Shop />} />
        <Route path='/checkout' element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
