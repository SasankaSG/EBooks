import { Routes, Route } from "react-router-dom";
import { HomePage, ProductList, ProductDetail, Login, Register, CartPage, OrderPage, DashboardPage, PageNotFound } from "../pages"
import { ProtectedRoute } from "./ProtectedRoute";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
        <Route path="/order-summary" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="*" element={<PageNotFound />} />
        
    </Routes>
    </>
  )
}

//<Route path="/cart" element={token ? <CartPage /> : <Navigate to= "/login"/>} />
//since we have to repeat this above line for each token session, we will create a component for this and re-use


//we created a protectedRoute for login safety. we will pass the compoment in protectroute compo like a child.
