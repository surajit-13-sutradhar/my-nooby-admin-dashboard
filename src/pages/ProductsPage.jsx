import { motion } from "framer-motion"
import Header from "../components/common/Header"
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react"
import ProductTable from "../components/products/ProductTable"
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart"
import SalesTrendChart from "../components/products/SalesTrendChart"
import OverviewCard from "../components/common/OverviewCard"

const ProductsPage = () => {
    return (
        <div className="flex-1 overflow-auto relative z-10">
            <Header title="Products" />
            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
                {/* Stats */}
                {/* Motion div that contains the Overview Cards */}
                <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
                    initial={{opacity: 0, y: 24}}
                    animate={{opacity: 1, y:0}}
                    transition={{duration:0.75}}
                >
                    <OverviewCard name="Total Products" icon={Package} value="Rs. 2,56,720" color="#6366F1" />
                    <OverviewCard name="Top Selling" icon={TrendingUp} value="568" color="#8B5CF6" />
                    <OverviewCard name="Low Stock" icon={AlertTriangle} value="245" color="#EC4899" />
                    <OverviewCard name="Total Revenue" icon={DollarSign} value="15.56%" color="#10B981" />
                </motion.div>

                <ProductTable />

                {/* Charts */}
                <div className="grid grid-col-1 lg:grid-cols-2 gap-8">
                    <SalesTrendChart />
                    <CategoryDistributionChart />
                </div>

            </main>
        </div>
    )
}

export default ProductsPage