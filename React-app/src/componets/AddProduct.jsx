import styles from './AddProducts.module.css'


function AddProduct(props) {
    console.log('AddProdct rendered');

const { heading, desc } = props;
  
const person = {name: 'Lucky' , age: 22};
 
let isloggedIn;

const cars = ['maruti','tata','honda'];
const handleAddProduct = () => {
    alert('product added');

}

    return (
       <>
       <h2>{heading}</h2>
       <p className={style.desc}>{desc}</p>
       product name: <input type='text' />
<br></br>   
<input  type ="button" value="Add product" onclick= {() => handleAddProduct('sony')}/> <br /><br />




  
       <p>logged in status:{isloggedIn}, {cars} </p>
       Product Name: <input type='text'maxLength={10} minLength={5} style={{background:'royalbule'}}/> <br></br>
       
       
        <button>Add Product</button>
        </>
    )
}
export default AddProduct;