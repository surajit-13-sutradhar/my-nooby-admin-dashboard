import { color, motion } from "framer-motion"
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const categoryData = [
    {name: "Electronics", value: 4500},
    {name: "Clothing", value: 2800},
    {name: "Home & Garden", value: 3200},
    {name: "Books", value: 2100},
    {name: "Sports & Outdoors", value: 1900}
]

const COLORS = ["#6266F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"]

const CategoryDistributionChart = () => {
    return (
        <div>
            <motion.div
                className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-8 border-gray-700 text-[12px]"
                initial={{opacity: 0, y: 24}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 1}}
            >
                <h2 className="text-lg font-medium mb-4 text-gray-100">Category Distribution</h2>
                <div className="h-80">
                    <ResponsiveContainer width={"100%"} height={"100%"}>
                        <PieChart>
                            <Pie 
                                data={categoryData}
                                cx={"50%"}
                                cy={"50%"}
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884D8"
                                dataKey="value"
                                label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {categoryData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                                ))}
                            </Pie>
                            <Tooltip 
                                contentStyle={{
                                    backgroundColor: "rgba(31, 41, 55, 0.8",
                                    borderColor:"#E5E7EB"
                                }}
                                itemStyle={{color: "#E5E7EB"}}
                            />
                           <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </motion.div>
        </div>
    )
}

export default CategoryDistributionChart