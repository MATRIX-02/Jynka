import { useEffect, useState } from 'react'
import api from '../api'

const ProductAPI = () => {

    const [products,setProducts]=useState([])

    const getProducts = async()=> {
        const res = await api.get('/api/products')
        setProducts(res.data.products)
    }

    useEffect(()=> {
        getProducts()
    },[])

  return {
    products : [products,setProducts]
  }
}

export default ProductAPI
