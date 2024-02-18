import Link from 'next/link'
import React from 'react'

const Product = () => {
  return (
    <div>
      <h1>Product Detail</h1>
      <Link href="/products">Back</Link>
    </div>
  )
}

export default Product