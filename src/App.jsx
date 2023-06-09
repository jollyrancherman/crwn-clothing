import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Authorization from "./routes/authorization/authorization.component";
import CheckOut from "./routes/check-out/check-out.component";
import { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
