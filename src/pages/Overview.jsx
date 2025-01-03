import { BarChart2, ShoppingBagIcon, User, Zap } from "lucide-react";
import Header from "../components/common/Header.jsx"
import OverviewCard from "../components/common/OverviewCard.jsx"
import SalesOverviewChart from "../components/overview/SalesOverviewChart.jsx"
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart.jsx"
import { motion } from "framer-motion";
import SalesChannelChart from "../components/overview/SalesChannelChart.jsx";

const Overview = () => {
    return (
        // 'overflow-auto' adds scrollbar only when necessary
        <div className="flex-1 overflow-auto relative z-10"> 
            <Header title="Overview" />
            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
                {/* Stats */}
                {/* Motion div that contains the Overview Cards */}
                <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
                    initial={{opacity: 0, y: 24}}
                    animate={{opacity: 1, y:0}}
                    transition={{duration:0.75}}
                >
                    <OverviewCard name="Total Sales" icon={Zap} value="Rs. 2,56,720" color="#6366F1" />
                    <OverviewCard name="New Users" icon={User} value="568" color="#8B5CF6" />
                    <OverviewCard name="Total Products" icon={ShoppingBagIcon} value="245" color="#EC4899" />
                    <OverviewCard name="Conversion Rate" icon={BarChart2} value="15.56%" color="#10B981" />
                </motion.div>

                {/* Charts */}

                <div className="grid lg:grid-cols-2 gap-8 grid-cols-1">
                    <SalesOverviewChart />
                    <CategoryDistributionChart />
                    <SalesChannelChart />
                </div>
                
            </main>
        </div>
    )
};

export default Overview;
