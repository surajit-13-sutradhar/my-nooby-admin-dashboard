import Header from '../components/common/Header'
import AnalyticsCard from '../components/analytics/AnalyticsCard'
import RevenueChart from '../components/analytics/RevenueChart'
import ChannelPerformance from '../components/analytics/ChannelPerformance'
import ProductPerformance from '../components/analytics/ProductPerformance'
import UserRetention from '../components/analytics/UserRetention'
import CustomerSegmentation from '../components/analytics/CustomerSegmentation'
import Insights from '../components/analytics/Insights'

const Analytics = () => {
    return (
        <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
            <Header title={"Analytics Dashboard"} />

            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
                <AnalyticsCard />
                <RevenueChart />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <ChannelPerformance />
                    <ProductPerformance />
                    <UserRetention />
                    <CustomerSegmentation />
                </div>
                <Insights />
            </main>
        </div>
    )
}

export default Analytics