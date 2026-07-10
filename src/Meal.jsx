import { useState,useEffect } from "react";
import "./assets/meal.css";
import Header from './meal_components/Header.jsx';
import Hero from './meal_components/Hero.jsx';
import Categories from './meal_components/Categories.jsx';
import Footer from './meal_components/Footer.jsx';

const Meal = () => {
    //how to send data from one component to another component in react
    const [categories, setCategories] = useState([]);  //categorie coming from api will be stored here initially It is empty
    const [loading, setLoading] = useState(false); //initially loading is False ,Tracking if there is ongoing request being fetch
    const [error, setError] = useState(false); //initially error is false, if there is an error it will be stored here

    function fetchMealCategories() {
        setLoading(true); //when the request is sent loading is true
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            setError(false)
            setCategories(data.categories);
            setLoading(false);
        })
        .catch(function(err){
             setError(true);
            setCategories([]);
            setLoading(false);
        })
    }

     //this is used to communicate with an external system 
    useEffect(() => {
      fetchMealCategories(); //fetchMealCategories is called when the component is mounted
    },[])
  return (
    <>
      <Header/>
      <Hero/>
      <Categories categories={categories} error={error} loading={loading}/>
      <Footer/>  
    </>
  )
}
export default Meal