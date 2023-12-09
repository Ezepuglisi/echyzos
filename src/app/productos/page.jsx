'use client'
import { useEffect, useState } from "react"

const Productos = () => {

  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const getProductsFromDB = async () => {

    const options = {
      method: 'GET'
    }

    fetch('/api/products', options)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          setIsLoading(false)
          setError(true)
          return
        }

        setProducts(res.result)
        setIsLoading(false)

      })
  }

  useEffect(() => {
    console.log('render')
    getProductsFromDB()
  }, [])


  useEffect(() => {
    console.log('tenemos productos chavales', products)
  }, [products])

  return (
    <div className="flex-1 flex items-center justify-center">
      {isLoading && (
        <div className="w-20 h-20 border-t-4 border-green-500 border-solid rounded-full animate-spin"></div>
      )}

      {
        products.length > 0 && products.map((producto, index) => {
          return (
            <div key={index}>
              <p>{producto.product_title}</p>
            </div>
          )
        })
      }

    </div>
  )
}

export default Productos