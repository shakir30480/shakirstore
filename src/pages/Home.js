
import ProductCard from '../components/ProductCard';


function Home(props) {
  if(props.products.length >0){
    
   
    return (
      <>
    <div>
      
      <h1>Our Products</h1>
    <div className="row">
      {
      props.products.map((product) => {
        return (
          <div class="col-md-3" style={{ marginBottom: "30px" }}>
            
           <ProductCard cart={props.cart} addToCart={props.addToCard} product={product} key={product.id}/>
          </div>
       
        );
      })}
    </div>
    </div>
    </>
  )
   
  }
  else {
    return(
       <>
      <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
      </>)
   
  }
}

export default Home