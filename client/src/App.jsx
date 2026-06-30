import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

import PrivateRoute from "./components/PrivateRoute";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminPage from "./pages/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";

import CategoriesPage from "./pages/CategoriesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>

          <Navbar />

          <main className="min-h-screen bg-gray-50">

            <Routes>

              {/* Public Routes */}

              <Route path="/" element={<HomePage />} />

              <Route path="/products" element={<ProductsPage />} />

              <Route path="/products/:id" element={<ProductDetailPage />} />

              <Route path="/categories" element={<CategoriesPage />} />

              <Route path="/about" element={<AboutPage />} />

              <Route path="/contact" element={<ContactPage />} />

              <Route path="/login" element={<LoginPage />} />

              <Route path="/register" element={<RegisterPage />} />

              <Route path="/admin/login" element={<AdminLoginPage />} />

              {/* Protected Routes */}

              <Route
                path="/cart"
                element={
                  <PrivateRoute>
                    <CartPage />
                  </PrivateRoute>
                }
              />

              <Route
                path="/orders"
                element={
                  <PrivateRoute>
                    <OrdersPage />
                  </PrivateRoute>
                }
              />

              <Route
                path="/orders/:id"
                element={
                  <PrivateRoute>
                    <OrderDetailPage />
                  </PrivateRoute>
                }
              />

              {/* Admin */}

              <Route
                path="/admin"
                element={
                  <PrivateRoute adminOnly>
                    <AdminPage />
                  </PrivateRoute>
                }
              />

              {/* 404 */}

              <Route path="*" element={<NotFoundPage />} />

            </Routes>

          </main>

          <Footer />

        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;