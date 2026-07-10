import blogpic from './assets/img.jpg'
function Content(){
     let myStyles = {color :'yellow', backgroundColor: 'purple',padding: '10px'}
    return<> 
   
    <div className='col-md-6 p-4'>
      <img src={blogpic} alt='' className="img-fluid rounded" />
    </div>
    <div className='col-md-6 p-4' >
      <h3 style={myStyles} className='mt-5'>Blog Section</h3>
      <p>This is our blog section</p>
      <button onClick={function(){alert('Welcome to our webpage')}} type='button' className='btn btn-primary'>Learn More</button>
    </div>
    </>
  
}
export default Content