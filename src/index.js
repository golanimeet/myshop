import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminCategory from './AdminCategory';
import AdminProduct from './AdminProduct';
import AdminOrder from './AdminOrder';
import AdminUser from './AdminUser';
import AdminAddCategory from './AdminAddCategory';
import AdminAddProduct from './AdminAddProduct';
import AdminEditCategory from './AdminEditCategory';
import AdminEditProduct from './AdminEditProduct';
import AdminOrderPrint from './AdminOrderPrint'
import AdminUserMessage from './AdminUserMessage';
import AdminViewOrder from './AdminViewOrder';
import AdminViewProduct from './AdminViewProduct';
import AdminLogin from './AdminLogin';
import PageNotFound from './PageNotFound';

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route index path="/" element={<AdminLogin />} />
            <Route path="/home" element={<AdminSidebar />} />
            <Route path="/category" element={<AdminCategory />} />
            <Route path="/product" element={<AdminProduct />} />
            <Route path="/orders" element={<AdminOrder />} />
            <Route path="/users" element={<AdminUser />} />
            <Route path="/add-category" element={<AdminAddCategory />} />
            <Route path="/add-product" element={<AdminAddProduct />} />
            <Route path="/edit-category" element={<AdminEditCategory />} />
            <Route path="/edit-product" element={<AdminEditProduct />} />
            <Route path="/order-print" element={<AdminOrderPrint />} />
            <Route path="/user-message" element={<AdminUserMessage />} />
            <Route path="/view-order" element={<AdminViewOrder />} />
            <Route path="/view-product" element={<AdminViewProduct />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);