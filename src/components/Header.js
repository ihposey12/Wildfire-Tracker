import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const Header = () => {
    return(
        <div>
            <header>
                <h1><Icon icon={locationIcon} /> Wildfire Tracker (Powered by NASA)</h1>
            </header>
        </div>
    )
}

export default Header