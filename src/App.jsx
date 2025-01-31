import { Route, Routes } from "react-router-dom"
import Overview from "./pages/Overview"
import ProductsPage from "./pages/ProductsPage"
import UsersPage from "./pages/UsersPage.jsx"
import SalesPage from "./pages/SalesPage.jsx"
import Sidebar from "./components/common/Sidebar.jsx"
import OrdersPage from "./pages/OrdersPage.jsx"
import Analytics from "./pages/Analytics.jsx"
import Settings from "./pages/Settings.jsx"

function App() {
    return (
        <div className="flex h-screen bg-gray-900 text-gray-200">
            
            
            {/* Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-600 to-gray-900 opacity-80" />
                <div className="absolute inset-0 backdrop-blur-md" />
            </div>

            <Sidebar />

            {/* Create different routes for different pages */}
            <Routes>
                <Route path="/" element={<Overview />} /> 
                <Route path="/products" element={<ProductsPage />} /> 
                <Route path="/users" element={<UsersPage />} /> 
                <Route path="/sales" element={<SalesPage />} /> 
                <Route path="/orders" element={<OrdersPage />} /> 
                <Route path="/analytics" element={<Analytics />} /> 
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </div>
    )
}

export default App;

