import React from 'react'
import UserItem from './UserItem'
import { Grid } from '@nextui-org/react'
import { mockUsers } from '../constants/user'
 const getUsers = () => {
        const myPromise = fetch('https://reqres.in/api/users?page=1') 
        myPromise
            .then(res => {
                return res.json()
            })
            .then((resData) => {
                console.log(resData)
                const temp = resData.data;
                console.log(temp)
            });
        
    }
const UserContainer = () => {
   getUsers()
    return <Grid.Container gap={2}>
        {mockUsers.map((users) => {
            return <Grid xs={4} key={users.id}>
                <UserItem userData={users}/>
          </Grid>
      })}
    
    </Grid.Container>
}

export default UserContainer;