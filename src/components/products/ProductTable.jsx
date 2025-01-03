// TODO: Implement Pagination in the Tables Section


import { motion } from "framer-motion"
import { Edit, Edit2, Search, Trash2 } from "lucide-react"
import { useState } from "react"

const PRODUCT_DATA = [
	{ id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
	{ id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
	{ id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
	{ id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
	{ id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
];

const ProductTable = () => {

    const [searchItem, setSearchItem] = useState("")
    const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA)

    // Filtered Search Implementation
    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase() // to lowercase is used to deal with case sensitivity
        setSearchItem(term)
        const filtered = PRODUCT_DATA.filter(product => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term))
        setFilteredProducts(filtered)
    }

    // Deleting Products
    const handleDelete = (id) => {
        setFilteredProducts(PRODUCT_DATA.filter(product => product.id !== id))
    }

    return (
        <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-200">Product List</h2>
                <div className="relative">
                    <input type="text" name="Search Products"
                    placeholder="Search for Products..."
                    className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="input" 
                    // onChange={(e) => setSearchItem(e.target.value)}
                    onChange={handleSearch}
                    value={searchItem}
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size="18" />
                </div>
            </div>

            {/* Table Lists */}
            {/* TODO: Add lots more products and Pagination as well, atleast 4 pages */}
            {/* overflow-x-auto means we can scroll */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    {/* Table heading */}
                    <thead>
                        <tr>
                            {/* Name */}
                            <th
                                className="px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-tight"
                            >
                                Name
                            </th>
                            {/* Category */}
                            <th
                                className="px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-tight"
                            >
                                Category
                            </th>
                            {/* Price */}
                            <th
                                className="px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-tight"
                            >
                                Price
                            </th>
                            {/* Stock */}
                            <th
                                className="px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-tight"
                            >
                                Stock
                            </th>
                            {/* Sales */}
                            <th
                                className="px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-tight"
                            >
                                Sales
                            </th>
                            {/* Actions */}
                            <th
                                className="px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-tight"
                            >
                                Actions
                            </th>
                        </tr>
                    </thead>
                    
                    {/* Table Body */}
                    <tbody className="divide-y divide-gray-700">
                        {filteredProducts.map(product => (
                            <motion.tr 
                            key={product.id}
                            initial={{opacity: 0, y: 12}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.3}}
                            >   
                                {/* Product name */}
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                                    {product.name}
                                </td>

                                {/* Product Category */}
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                                    {product.category}
                                </td>

                                {/* Product price */}
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 ">
                                    {product.price.toFixed(2)}
                                </td>

                                {/* Product Stocks */}
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                                    {product.stock}
                                </td>

                                {/* Product Sales */}
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                                    {product.sales}
                                </td>
                                
                                {/* Action Buttons */}
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                                    <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                                        <Edit2 size={18} />
                                    </button>
                                    <button className="text-red-400 hover:text-red-300" onClick={() => handleDelete(product.id)} >
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    )
}

export default ProductTable