import {SingleActivity} from "./SingleActivity"
import {activities} from '../data'

export const DashboardFeed = () => { 

    console.log(activities)

    return(<>
        <h2 className='dashboard_item2'>
            <h3>Following</h3>
            {activities.map((activity) => { 
                return <SingleActivity distance={activity.distance} key={activity.id}/> 
            })}
        </h2>
    </>)
}