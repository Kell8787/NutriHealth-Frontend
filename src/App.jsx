import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreadorRecetas from "./components/Diet/CreadorRecetas/CreadorRecetas"
import RecipeCard from "./components/Diet/CreadorRecetas/RecipeCard/RecipeCard"
import RecipeCollection from "./components/Diet/RecipeCollection/RecipeCollection"
import FootNutri from "./components/FootNutri/FootNutri"
import HeaderNavbar from "./components/HeaderNavbar/HeaderNavbar"
import IMC from "./components/IMC/IMC"
import Login from "./components/MainPage/Login/Login"
import MainPage from "./components/MainPage/MainPage"
import Profile from "./components/Profile/profile"
import Register from "./components/Register/Register"
import WaterReminder from "./components/WaterReminder/WaterReminder"
import Lujito from "./components/Lujito/Lujito"
import ShoppingList from "./components/Diet/ShoppingList/ShoppingList"
import Dietas from "./components/Diet/Dietas/Dietas"


function App() {


  return (
    <>
      <BrowserRouter>
        <HeaderNavbar />
        <Routes>
          <Route path="/creator" element={<CreadorRecetas />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={[<MainPage />, <WaterReminder/>]} />
          <Route path="/collection" element={<RecipeCollection />} />
          <Route path="/imc" element={<IMC />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/lujito" element={<Lujito/>}/>
          <Route path="/shoppinglist" element={<ShoppingList/>}/>
          <Route path="/dietas" element={<Dietas/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      <FootNutri/>




    </>
  )
}

export default App
