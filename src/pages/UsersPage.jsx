import Header from "../components/common/Header"
import { motion } from "framer-motion"
import OverviewCard from "../components/common/OverviewCard"
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react"
import UserTable from "../components/users/UserTable"
import UserGrowthChart from "../components/users/UserGrowthChart"
import UserActivityHeatMap from "../components/users/UserActivityHeatMap"
import UserDemographicChart from "../components/users/UserDemographicChart"

const USERSTATS = {
	totalUsers: 152845,
	newUsersToday: 243,
	activeUsers: 98520,
	churnRate: "2.4%",
};

const UsersPage = () => {
    return (
        <div className="flex-1 overflow-auto relative z-10">
            <Header title="Users" />
            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
                {/* Stats */}
                {/* Motion div that contains the Overview Cards */}
                <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
                    initial={{opacity: 0, y: 24}}
                    animate={{opacity: 1, y:0}}
                    transition={{duration:0.75}}
                >
                    <OverviewCard name="Total Users" icon={UsersIcon} value={USERSTATS.totalUsers.toLocaleString()} color="#6366F1" />
                    <OverviewCard name="New Users Today" icon={UserCheck} value={USERSTATS.newUsersToday.toLocaleString()} color="#8B5CF6" />
                    <OverviewCard name="Active Users" icon={UserPlus} value={USERSTATS.activeUsers.toLocaleString()} color="#EC4899" />
                    <OverviewCard name="Churn Rate" icon={UserX} value={USERSTATS.churnRate} color="#EF4444" />
                </motion.div>

                {/* Users Table */}
                <UserTable />

                {/* User Charts */}
                <div className="grid grid-col-1 lg:grid-cols-2 gap-8">
                    <UserGrowthChart />
                    <UserActivityHeatMap />
                    <UserDemographicChart />
                </div>

            </main>
        </div>
    )
}

export default UsersPage