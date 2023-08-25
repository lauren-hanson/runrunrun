import { PersonalGoals } from "./PersonalGoals"
import { ProfileCard } from "./ProfileCard"


export const DashboardProfile = () => {

    return (<>
        <h2 className='dashboard_item1'>
            <ProfileCard />
            <PersonalGoals />
        </h2>
    </>)
}