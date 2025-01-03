import { BarChart2, DollarSign, Settings, ShoppingBag, ShoppingCart, TrendingUpDown, Users, Menu } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'


// Covention, as it is hardcoded
const SIDEBAR_ITEMS = [
    { name: "Overview", icon: BarChart2, color: "#6366f1", href: "/" },
    { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href:"/products" },
    { name: "Users", icon: Users, color: "#8B5CF6", href:"/users" },
    { name: "Sales", icon: DollarSign, color: "#8B5CF6", href:"/sales" },
    { name: "Orders", icon: ShoppingCart, color: "#8B5CF6", href:"/orders" },
    { name: "Analytics", icon: TrendingUpDown, color: "#8B5CF6", href:"/analytics" },
    { name: "Settings", icon: Settings, color: "#8B5CF6", href:"/settings" },
]

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true) 
    
    return (
        // Motion div to contain the sidebar
        <motion.div
            className = {`relative z-20 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? 'w-64':'w-20'}`}
            animate={{width: isSidebarOpen ? 256 : 80}}
        > 
            {/* Sidebar */}
            <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
                {/* Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-2 rounded-full hover:bg-gray-600 transition-colors max-w-fit"
                >
                    <Menu size={24} />
                </motion.button>
                {/* Navigation Items */}
                <nav className="mt-8 flex-grow">
                    {SIDEBAR_ITEMS.map((item) =>(
                        <Link key={item.href} to={item.href}>
                            <motion.div
                                className="flex items-center p-4 text-sm font-medium rounded-md hover:bg-gray-700 transition-colors mb-2"
                            >   
                                <item.icon size={20} style={{color: item.color, minWidth: "20px"}} />
                                <AnimatePresence>
                                    {isSidebarOpen && (
                                        <motion.span
                                            className="ml-4 whitespace-nowrap"
                                            initial={{opacity: 0, width: 0}}
                                            animate={{opacity: 1, width: "auto"}}
                                            exit={{opacity: 0, width: 0}}
                                            transition={{duration: 0.2, delay: 0.3}}
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </Link>
                    ))}
                </nav>
            </div>
        </motion.div>
    )
}

export default Sidebar