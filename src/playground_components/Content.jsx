const Content = ({count,fruits,products,updater}) => {
     //count = 25 // props must not  be changed inside the child component
    // a function the handles click of decrease button
    function handl_decrease(){
        updater(count-1)
        
        console.log(count)
    }
    // a function that responds to the click of increase button 
    function increase(){
       updater(count+1)
       
        console.log(count);
    }
    return(
        <div>
            <p>Count: {count}</p>
             {/* <button onClick={function(){alert('You increase Me')}}>Increase</button> */}
        <button onClick={increase}>Increase</button>
        {/* calling a function that respond to an event */}
        <button onClick={handl_decrease}>Decrease</button>
        {/* we can also use map function to display the fruits array */}
        <p>Available Fruits:</p>
        <ul>
        {
            fruits.map(function(fruit,index){
                return <li key={index}>{fruit}</li>
            })
        }
        </ul>
        <p>Available Products:</p>
        <table className="table table-bordered">

            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(function(product){
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
       
        </div>
    )
}
export default Content