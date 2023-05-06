import { Route, Routes } from "react-router-dom";
// import HomeComponent from "./Routes/Homes/Homes.component.jsx";
import HomeComponent from "./Routes/Homes/Homes.component.jsx";
const App = () => {
  return (
    <Routes>
      <Route path="/home" index element={<HomeComponent />} />
    </Routes>
  );
};

export default App;
