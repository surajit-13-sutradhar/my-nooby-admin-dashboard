import { Route, Routes } from "react-router-dom"
import Overview from "./pages/Overview"
import ProductsPage from "./pages/ProductsPage"
import UsersPage from "./pages/UsersPage.jsx"
import Sidebar from "./components/Sidebar.jsx"

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
                <Route path="/sales" element={<ProductsPage />} /> 
                <Route path="/orders" element={<ProductsPage />} /> 
                <Route path="/analytics" element={<ProductsPage />} /> 
                <Route path="/settings" element={<ProductsPage />} />
            </Routes>
        </div>
    )
}

export default App;

