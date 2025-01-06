import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { TrendingUp, Users, ShoppingBag, DollarSign } from "lucide-react"

const INSIGHTS = [
	{
		icon: TrendingUp,
		color: "text-green-500",
		insight: "A 15% increase in revenue this month, largely attributed to the success of our recent email campaign.",
	},
	{
		icon: Users,
		color: "text-blue-500",
		insight: "Customer loyalty is up by 8% following the introduction of an enhanced rewards program.",
	},
	{
		icon: ShoppingBag,
		color: "text-purple-500",
		insight: 'The "Electronics" category is showing strong growth potential, with demand surging in recent weeks.',
	},
	{
		icon: DollarSign,
		color: "text-yellow-500",
		insight: "Adjusting our pricing strategy could lead to a 5-7% boost in overall profit margins.",
	},
]

const Insights = () => {
    return (
        <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        >
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Insights</h2>
            <div className="space-y-4">
                {INSIGHTS.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                        <div className={`p-2 rounded-full ${item.color} bg-opacity-20`}>
							<item.icon className={`size-6 ${item.color}`} />
						</div>
						<p className="text-gray-300">{item.insight}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Insights