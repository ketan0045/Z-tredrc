import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import { addToCard, emptyCard, removeToCard } from '../redux/action';

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in main component", data);

  useEffect(() => {
    dispatch(productList())
  }, [])

  return (
    <div>
      <div>
        <button onClick={() => dispatch(emptyCard())}>Empty Cart</button>
      </div>
      <div className='product-container'>
        {
          data.map((item) => <div className='product-item'>
            <img src={item.photo} alt="" />
            <div>Name : {item.name} </div>
            <div>Color : {item.color} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              <button onClick={() => dispatch(addToCard(item))} >Add to Cart</button>
              <button onClick={() => dispatch(removeToCard(item.id))}>Remove to Cart</button>
            </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Main;




