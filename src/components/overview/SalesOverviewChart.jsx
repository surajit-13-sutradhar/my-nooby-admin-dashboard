import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { motion } from "framer-motion"

const salesData = [
    {name: "Feb", sales: 4200},
    {name: "Mar", sales: 4900},
    {name: "Apr", sales: 3200},
    {name: "May", sales: 5200},
    {name: "Jun", sales: 6200},
    {name: "Jul", sales: 4700},
    {name: "Aug", sales: 4790},
    {name: "Sep", sales: 6000},
    {name: "Oct", sales: 6500},
    {name: "Nov", sales: 6490},
    {name: "Dec", sales: 4300},
    {name: "Jan", sales: 3700}
]

const SalesOverviewChart = () => {
    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border-gray-700 text-[12px]"
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 1}}
        >
            <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Overview</h2>

            <div className="h-80">
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <LineChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 4" stroke="#4B5563" />
                        <XAxis dataKey={"name"} />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563"
                            }}
                            itemStyle={{color: "#35E7EB"}}
                        />
                            <Line
                                type="monotone"
                                dataKey="sales"
                                stroke="#6366F1"
                                strokeWidth={3}
                                dot={{fill: "#6366F1", strokeWidth: 2, r: 6}}
                                activeDot={{r: 8, strokeWidth: 2}}
                            />
                    </LineChart>
                </ResponsiveContainer>
            </div>

        </motion.div>
    )
}

export default SalesOverviewChart