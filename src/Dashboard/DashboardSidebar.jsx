import { Challenges } from "./Challenges"
import { Clubs } from "./Clubs"
import { Friends } from "./Friends"

export const DashboardSidebar = () => { 

    return(<>
        <h2 className='dashboard_item3'>
            <Challenges /> 
            <Clubs /> 
            <Friends /> 
        </h2>
    </>)
}