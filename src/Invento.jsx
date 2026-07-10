import "./assets/app.css"
import Header from "./invento_components/Header"
import Create from "./invento_components/Create"
import Footer from "./invento_components/Footer"
import Products from "./invento_components/Products"

const invento = () => {
  return (
    <div className='container'>
    <div className="row">
      <div className="col-12">
          <Header />
        </div>
      <div className="col-12">
        <Create />
      </div>
      <div className="row">
        <Products />
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
   </div>
  )
}

export default invento