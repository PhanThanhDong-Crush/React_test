import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProductManagement } from './admin/ProductManagement '
import { EditProduct } from './admin/EditProduct'
import { AddProduct } from './admin/AddProduct'
import { addPro, deletePro, editPro, getAll } from './api/product'
import { ProductDetail } from './page/ProductDetail'
import { HomePage } from './page/HomePage'
import './App.css'
import { ProductsPage } from './page/ProductsPage'

function App() {
  const [products, setProduct] = useState(0)
  useEffect(() => {
    getAll().then(({ data }) => setProduct(data))
  }, []);

  const onClickDelete = async (id) => {
    await deletePro(id)
    getAll().then(() => setProduct(products.filter(pro => pro.id !== id)))
  }

  const onClickAdd = async (product) => {
    await addPro(product).then(({ data }) => setProduct(data))
  }

  const onClickEdit = async (id, product) => {
    await editPro(id, product)
    getAll().then(({ data }) => setProduct(data))
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage products={products} />} />
          <Route path="/products/:id" element={<ProductDetail />} />

          <Route path="/admin/products" element={<ProductManagement products={products} deletePro={onClickDelete} />} />
          <Route path="/admin/products/:id" element={<EditProduct editPro={onClickEdit} />} />
          <Route path="/admin/products/add" element={<AddProduct addPro={onClickAdd} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
