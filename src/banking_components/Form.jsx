import { useState } from "react"

const Form = ({balance,setBalance}) => {
    // A state to track the amount they typed. To mamanage the state we need to import the useState hook
    const[amount,setAmount]=useState("")
    function withdraw(){
            if(amount==""){
                    alert("Oga, how much you wan withdraw");
                    return false;
            }
            if (amount>balance){
                alert("Oga, How much you wan withraw")
                return false;
            }
            var amount_to_withdraw=Number(amount)
            var curentBalance=balance-amount_to_withdraw
            setBalance(curentBalance)
            setAmount("")
    }
    function deposit(){
                if(amount==""){
                    alert("Oga, how much you wan withdraw");
                    return false;
            }

            var amount_to=Number(amount)
            var currentBalance=balance+(amount_to)
            setBalance(currentBalance)
            setAmount("")

    }
  return (
   <div className="row">
    <div className="col-md-8 py-4 offset-md-2 text-center">
        <div className="mb-2">
            <input type="number"className="form-control" value={amount} onChange={function(e){
                setAmount(e.target.value);
            }}/>
        </div>
        <div className="mb-2 ">
            <button className="btn btn-danger col-6" onClick={withdraw}>Withdraw</button>
            <button className="btn btn-primary col-6" onClick={deposit}>Deposit</button>
        </div>
    </div>
   </div>
  )
}

export default Form