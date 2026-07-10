import { useState } from "react"
import AccountBalance from "./banking_components/AccountBalance"
import Form from "./banking_components/Form"
import Hello from "./banking_components/Hello"
import Hi from "./banking_components/Hi"


const Banking = () => {
    //The state is kept here so all the components can use it. The balance has to be here in the parent component so that other child component can use it
    const[balance,setBalance]=useState(0)//normally, the 0 should be fetch from the database of the user indicating the intial balance of the user at that point in time. default balance
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h1>Bankie Bank</h1>
            </div>
        </div>
        {/* other components assembled here */}
        {
            balance>1000 ? <p className="alert alert-success">You are doing well</p>:
            <p className="alert alert-warning">You need to deposit more money</p>
        }
        <AccountBalance balance={balance}/>
        <Form balance={balance} setBalance={setBalance}/>
        <hr/>
        <Hi />
        <Hello />
    </div>
  )
}

export default Banking