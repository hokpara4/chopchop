import ppo from "./assets/post-bg.jpg"
import Header from "./playground_components/Header.jsx"
import Content from "./playground_components/Content.jsx"
import Footer from "./playground_components/Footer.jsx"
// i want to use hook useState() i need to import it from react
import {useState} from "react"
const Playground = () => {
      {/* we sent a request an api and we got back appname */}
        var appname = "Blogger"
        const[count,setCount]  =  useState(0) // this is a hook that is used to keep a data that could be changing:react will update it by itself .Everywhere the state is used    
        //setCount is the only one that can change count
        // count ++ is a crime:we dont update  a state directly we use the setCount() function to update the state
        //var count = 0;
        var fruits = ["Kiwi","Banana","Apple"];
        var products = [
            {id:1,name:"Apple cider Vinger",price:1000},
            {id:2,name:"Yellow Garri",price:100},
            {id:3,name:"Oneplus",price:3000}
        ];
        // state is used to keep a data that couuld be changing:react will update it by itself .Everywhere the state is used 

        function sayHello(){
            alert("Hello from playground component")
        }
  return (
    <div>
       
        <Header xyz={appname} abc={count} />
        <Content count={count} fruits={fruits} products={products}  updater = {setCount} />
         {/* we are sending the setCount function to the child component so that it can update the count state */}
        <Footer />
        {/* How to display image that is inside the public folder */}
        <img src="/assets/img/home-bg.jpg" alt="image" className="img-fluid" />
        {/* How to display image that is inside src folder */}
        <img src={ppo} alt="image" className="img-fluid" />
    </div>
    

        )
}
export default Playground

