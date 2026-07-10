
import{ useContext } from "react"
import { ProductContext } from "../context/ProductContext.jsx"
const Products = () => {
  const { products,setProducts} = useContext(ProductContext);
  var k = 1
  return (
    <div className="row products text-center">
  <div className="col-md-6 offset-md-3">
    <h3>Products Inventory </h3>
  </div>
  <div className="col-md-8 offset-md-2">
    <table className="table">
      <thead>
        <tr>
          <th>S/N</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="table table-primary">
        {
          products && products.length > 0 && products.map(function(pro){
            return(
                <tr key={pro.id}>
                  <td>{k++}</td>
                  <td>{pro.productname}</td>
                  <td>{pro.qty}</td>
                  <td>
                   <button 
                    className="btn btn-danger btn-sm" 
                    onClick={() => {
                      // Show confirmation
                      alert('You are about to delete this product: ' + pro.id)
                      
                      // Filter out the product that was clicked
                      const neededProducts = products.filter((prod) => prod.id !== pro.id);
                      
                      // Update state
                      setProducts(neededProducts)
                    }}
                  >
                    Delete
                  </button>
                  </td>
                </tr>
            )
          })
        }
      
        
      </tbody>
    </table>
  </div>
</div>

  )
}

export default Products