import { DashboardFeed } from "./DashboardFeed"
import { DashboardProfile } from "./DashboardProfile"
import { DashboardSidebar } from "./DashboardSidebar"

export const Dashboard = () => {

    return (<>
        <div className="dashboard-container">
            <DashboardProfile />
            <DashboardFeed />
            {/* <DashboardSidebar />  */}
        </div>
    </>)
}