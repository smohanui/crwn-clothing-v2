import { Route, Routes } from "react-router-dom";
// import HomeComponent from "./Routes/Homes/Homes.component.jsx";
import HomeComponent from "./Routes/Homes/Homes.component.jsx";
import NavigationComponent from "./Routes/Navigation/Navigation.component.jsx";
import ShopComponent from "./Routes/Shop/Shop.component";
import SignIncomponent from "./Routes/Sign-In/Sign-In.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationComponent />}>
        <Route index element={<HomeComponent />}></Route>
        <Route path="shop" element={<ShopComponent />}></Route>
        <Route path="Sign-In" element={<SignIncomponent />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
