import './App.css';
import {Axios} from 'axios';
import {useState} from "react";
import recipetile from "./recipetile";

function App(){
const [query,setquery]=useState("");
const [recipes,setrecipes]=useState([]);
const [healthLabel,sethealthLabel]=useState("vegan");

const YOUR_APP_KEY = `08d863c3acfd6b4ca002beaa20ce5913`;
const YOUR_APP_ID = `872352b0`;
const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
async function getRecipes()
{
  var result=await Axios.get(url);
  setrecipes(result.data.hits);
  console.log(result.data);
}
const onSubmit=(e)=>{
  e.preventDefault();
  getRecipes();
}
  return (
    <div className="app">
    <h1 onClick={getRecipes}> FOOD RECIPE</h1>
    <form className="app__searchform" onSubmit={onSubmit}>
    <input
     type="text"
     className="app__input"
    placeholder="enter ingredient"
    value={query} 
    onChange={(e)=>setquery(e.target.value)}/>
    <input className="app__submit" type="submit" value="search"/>
    <select className="app__healthLabels"> 
    <option  onClick={() => sethealthLabel("vegan")}>
      vegan
    </option>
    <option  onClick={() => sethealthLabel("vegetarian")}>
      vegan
    </option>
    <option  onClick={() => sethealthLabel("non-veg")}>
      vegan
    </option>
    <option onClick={() => sethealthLabel("animals")}>
      vegan
    </option>
    <option onClick={() => sethealthLabel("nea")}>
      vegan
    </option>
    </select>
    </form>
    <div className="app__recipes">
    {recipes.map((recipe)=>{
      return <recipetile recipe={recipe}/>;
    })}
    </div>
    </div>
  );
}
export default App;
