import React, { useState } from 'react'
import SettingSections from './SettingSections'
import ToggleSwitch from './ToggleSwitch'
import { Lock } from 'lucide-react'

const Security = () => {
    const [twoFactor, setTwoFactor] = useState(false)

    return (
        <SettingSections icon={Lock} title={"Security"}>
            <ToggleSwitch
                label={"Two Factor Authentication"}
                isOn={twoFactor}
                onToggle={() => setTwoFactor(!twoFactor)}
            />
            <div className="mt-4">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-gray-200 font-semibold py-2 px-4 rounded transition duration-200">
                    Change Password
                </button>
            </div>
        </SettingSections>
    )
}

export default Security