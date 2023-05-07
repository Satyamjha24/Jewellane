import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getProduct } from '../redux/Product/action'
const SingleuserPage = () => {
    const dispatch=useDispatch()
    const{_id}=useParams()
    const {products,isLoading}=useSelector((state)=>state.productReducer)
  const[data,setData]=useState({})
  const [quantity,setquantity]=useState(0)
console.log(products)
  useEffect(() => {
    dispatch(getProduct());
    let filteredData = products.filter((el) => {
      return el._id == Number(_id);
    });
    setData(filteredData[0]);
  }, [_id, dispatch, products]);

  console.log(data);

  // rest of the component code

//   const handleAddToCart = () => {
//     const data = { ...data, ["quantity"]: quantity };
//     delete data["id"]
//     dispatch(cartPostReq(data)).then(()=>{
//       toast({
//         title: `Product Added in the Shopping Cart`,
//         status: "success",
//         duration: 1000,
//         isClosable: true,
//       });
//     })
//   };

//   const handleQuantity = (val) => {
//     setQuantity((prev) => prev + val);
//   };

  return (
    <>
     
              <img src={data.imglink}  />
           
    </>
  );
};
export default SingleuserPage