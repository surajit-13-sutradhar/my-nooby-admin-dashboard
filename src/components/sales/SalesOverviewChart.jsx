import { motion } from "framer-motion"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react"

const SALES_DATA = {
    weekly: [
        { week: "Week 1", sales: 1200 },
        { week: "Week 2", sales: 1500 },
        { week: "Week 3", sales: 1800 },
        { week: "Week 4", sales: 2000 },
    ],
    monthly: [
        { month: "Jan", sales: 4000 },
        { month: "Feb", sales: 3000 },
        { month: "Mar", sales: 5000 },
        { month: "Apr", sales: 4500 },
        { month: "May", sales: 6000 },
        { month: "Jun", sales: 5500 },
        { month: "Jul", sales: 7000 },
    ],
    quarterly: [
        { quarter: "Q1", sales: 12000 },
        { quarter: "Q2", sales: 15000 },
        { quarter: "Q3", sales: 21000 },
    ],
    yearly: [
        { year: "2022", sales: 80000 },
        { year: "2023", sales: 95000 },
    ],
}

const SalesOverviewChart = () => {
    const [selectedTimeRange, setSelectedTimeRange] = useState("This Month")

    const getDataForTimeRange = () => {
        switch (selectedTimeRange) {
            case "This Week":
                return SALES_DATA.weekly
            case "This Month":
                return SALES_DATA.monthly
            case "This Quarter":
                return SALES_DATA.quarterly
            case "This Year":
                return SALES_DATA.yearly
            default: return []
        }
    }

    const salesData = getDataForTimeRange()

    // Dynamically Determining the XAxis data key
    const xAxisKey = selectedTimeRange === "This Week" ? "week" : selectedTimeRange === "This Month" ? "month" : selectedTimeRange === "This Quarter" ? "quarter" : "year"

    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text0gray-100">Sales Overview</h2>
                <select name="Select Timr Range" className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" value={setSelectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                >
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>This Quarter</option>
                    <option>This Year</option>
                </select>
            </div>

            <div className="w-full h-80">
                <ResponsiveContainer>
                    <AreaChart data={salesData}>
                    <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey={xAxisKey} stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
							itemStyle={{ color: "#E5E7EB" }}
						/>
                        <Area type="monotone" dataKey="sales" stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.3} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export default SalesOverviewChart