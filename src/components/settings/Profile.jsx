import { User2 } from "lucide-react"
import SettingSections from "./SettingSections"

const Profile = () => {
    return (
        <SettingSections icon={User2} title="Profile">
            <div className="flex flex-col sm:flex-row items-center mb-6">
                <img src="/image.png" alt="Profile Picture" className="rounded-full w-20 h-20 object-cover mr-4" />

                <div>
                    <h3 className="text-lg font-semibold text-gray-100">James Watson</h3>
                    <p className="text-gray-400">watson.james@random.com</p>
                </div>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-gray-200 font-semibold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
                    Edit Profile
            </button>
        </SettingSections>
    )
}

export default Profile