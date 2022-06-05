import React from 'react'
import {Card, User,Text} from '@nextui-org/react'
const UserItem = (props) => {
    const data = props.userData
    return <div>
        <Card shadow>
            <User src={data.avatar} name={`${data.first_name} ${data.last_name} `}></User>
            <Text h4 >{data.email}</Text>
        </Card>
    </div>
}
export default UserItem