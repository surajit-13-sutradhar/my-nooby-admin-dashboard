import Header from "../components/common/Header"
import OverviewCard from "../components/common/OverviewCard"
import { motion } from "framer-motion"
import SalesOverviewChart from "../components/sales/SalesOverviewChart"
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart"
import DailySalesTrend from "../components/sales/DailySalesTrend"
import { DollarSign, ShoppingCart, TrendingUp, CreditCard } from "lucide-react"

const SALES_STATS = {
    totalRevenue: "$1,234,567",
	averageOrderValue: "$78.90",
	conversionRate: "3.45%",
	salesGrowth: "12.3%",
}

const SalesPage = () => {
    return (
        <div className="flex-1 overflow-auto relative z-10">
            <Header title="Sales" />
            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
                {/* Stats */}
                {/* Motion div that contains the Overview Cards */}
                <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
                    initial={{opacity: 0, y: 24}}
                    animate={{opacity: 1, y:0}}
                    transition={{duration:0.75}}
                >
                    <OverviewCard 
                        name='Total Revenue' 
                        icon={DollarSign} 
                        value={SALES_STATS.totalRevenue} 
                        color='#6366F1' 
                    />
                    <OverviewCard      
                        name='Avg. Order Value'
						icon={ShoppingCart}
						value={SALES_STATS.averageOrderValue}
						color='#10B981' />
                    <OverviewCard
                        name='Conversion Rate'
						icon={TrendingUp}
						value={SALES_STATS.conversionRate}
						color='#F59E0B'
                    />
                    <OverviewCard
                        name='Sales Growth' icon={CreditCard} value={SALES_STATS.salesGrowth} color='#EF4444' 
                    />
                </motion.div>

                <SalesOverviewChart />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <SalesByCategoryChart />
                    <DailySalesTrend />
                </div>

            </main>
        </div>
    )
}

export default SalesPage