import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const SALES_DATA = [
	{ month: "Jan", sales: 4000 },
	{ month: "Feb", sales: 3000 },
	{ month: "Mar", sales: 5000 },
	{ month: "Apr", sales: 4500 },
	{ month: "May", sales: 6000 },
	{ month: "Jun", sales: 5500 },
];


const SalesTrendChart = () => {
    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border-gray-700 text-[12px]"
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 1}}
        >
            <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Trend</h2>

            <div className="h-80">
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <LineChart data={SALES_DATA}>
                        <CartesianGrid strokeDasharray="3 4" stroke="#374151" />
                        <XAxis dataKey={"month"} stroke='#9CA3AF' />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563"
                            }}
                            itemStyle={{color: "#E5E7EB"}}
                        />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="sales"
                                stroke="#6366F1"
                                strokeWidth={2}
                                dot={{fill: "#6366F1", strokeWidth: 2, r: 6}}
                                activeDot={{r: 8, strokeWidth: 2}}
                            />
                    </LineChart>
                </ResponsiveContainer>
            </div>

        </motion.div>
    )
}

export default SalesTrendChart