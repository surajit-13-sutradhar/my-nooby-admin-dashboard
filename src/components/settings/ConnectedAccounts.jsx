import { useState } from "react";
import SettingSections from "./SettingSections";
import { HelpCircle, Plus } from "lucide-react"
import { div } from "framer-motion/client";



const ConnectedAccounts = () => {
    const [connectedAccounts, setConnectedAccounts] = useState([
		{
			id: 1,
			name: "Google",
			connected: true,
			icon: "/google.png",
		},
		{
			id: 2,
			name: "Facebook",
			connected: false,
			icon: "/facebook.svg",
		},
		{
			id: 3,
			name: "Twitter",
			connected: true,
			icon: "/x.png",
		},
	]);

    return (
        <SettingSections icon={HelpCircle} title={"Connected Accounts"}>
            {connectedAccounts.map((account) => (
                <div key={account.id} className="flex items-center justify-between py-3">
                    <div className="flex gap-1">
                        <img src={account.icon} alt={account.name} className="size-6 object-cover"/>
                        <span className="text-gray-300">{account.name}</span>
                    </div>
                    <button className={`px-3 py-1 rounded ${account.connected ? "bg-green-500 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"}  transition duration-200`}
                    onClick={() => {setConnectedAccounts(
                        connectedAccounts.map((acc) => {
                            if (acc.id === account.id) {
                                return {
                                    ...acc,
                                    connected: !acc.connected,
                                }
                            }
                            return acc
                        })
                    )}}
                    
                    >
                        {account.connected ? "Connected" : "Connect"}
                    </button>
                </div>
            ))}
            <button className='mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200'>
				<Plus size={18} className='mr-2' /> Add Account
			</button>
        </SettingSections>
    )
}

export default ConnectedAccounts