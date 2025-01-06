import { Clock, ShoppingBag, DollarSign, CheckCircle } from "lucide-react"
import Header from "../components/common/Header"
import OverviewCard from "../components/common/OverviewCard"
import { motion } from "framer-motion"
import DailyOrders from "../components/orders/DailyOrders.jsx"
import OrderDistribution from "../components/orders/OrderDistribution.jsx"
import OrdersTable from "../components/orders/OrdersTable.jsx"

const ORDER_STATS = {
    totalOrders: "1,234",
	pendingOrders: "56",
	completedOrders: "1,178",
	totalRevenue: "$98,765",
}

const OrdersPage = () => {
    return (
        <div className="flex-1 relative z-10 overflow-auto">
            <Header title="Orders" />
            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
            <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
                    initial={{opacity: 0, y: 24}}
                    animate={{opacity: 1, y:0}}
                    transition={{duration:0.75}}
                >
                    <OverviewCard 
                        name='Total Orders' 
                        icon={ShoppingBag} 
                        value={ORDER_STATS.totalOrders} 
                        color='#6366F1' 
                    />
                    <OverviewCard      
                        name='Pending Orders'
						icon={Clock}
						value={ORDER_STATS.pendingOrders}
						color='#F59E0B' />
                    <OverviewCard
                        name='Completed Orders'
						icon={CheckCircle}
						value={ORDER_STATS.completedOrders}
						color='#10B981'
                    />
                    <OverviewCard
                        name='Total Revenue' icon={DollarSign} value={ORDER_STATS.totalRevenue} color='#EF4444' 
                    />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <DailyOrders />
                    <OrderDistribution />
                </div>
                
                <OrdersTable />
            </main>
        </div>
    )
}

export default OrdersPage