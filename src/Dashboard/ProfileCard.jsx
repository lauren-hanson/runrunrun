import { nanoid } from "nanoid"
import { users } from "../data"

export const ProfileCard = () => {

    return (<>
        {
            users.map((user) => {
                return <>
                    <div
                        key={user.id}
                        className='profile-image'>
                        <img src={user.image} />
                    </div>
                    <div>{user.firstName} {user.lastName}</div>
                </>
            })
        }
    </>)
}