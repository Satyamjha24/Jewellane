import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/Admin/action';
import { Heading,Grid ,CircularProgress, Select, Center} from '@chakra-ui/react';
import SingleProduct from './AdminSingleProduct';

const ManageProducts = () => {
  const [endpoint,setEndpoint]=useState('ring')
  const {isLoading,isError,products}=useSelector(store=>store.adminReducer);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getProducts(endpoint));
    
  },[endpoint])

  return(
    <div>
      <Heading mb='20px' size={'md'}>Manage Products</Heading>
      {isLoading && <CircularProgress isIndeterminate color='green.300' />}
      {isError && <h2>Error Occured while getting product list</h2>}
      <Center>
        <Select
          bg='yellow.400'
          placeholder="Select Product Category"
          onChange={(e) => setEndpoint(e.target.value)}
        >
        <option value="ring">Ring</option>
        <option value="bracelet">Bracelets</option>
        <option value="mangalsutra">Mangalsutra</option>
        </Select>
      </Center>
      <Grid templateColumns={'repeat(4,1fr)'} gap={2} className='flexbro' templateRows={'100'}>
      {products.length>0 && products.map(product=><SingleProduct key={product._id} product={product}/>)}
      </Grid>
    </div>
  )
}

export default ManageProducts;