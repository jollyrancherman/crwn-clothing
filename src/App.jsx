import { Routes, Route } from 'react-router-dom';
import SignIn from './components/sign-in/sign-in.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
