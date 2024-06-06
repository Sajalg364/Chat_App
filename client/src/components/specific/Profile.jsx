import { Avatar, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { Face as FaceIcon, CalendarMonth as CalendarIcon, AlternateEmail as UserNameIcon } from '@mui/icons-material'
import moment from 'moment'
import React from 'react'


const Profile = () => {
  return (
    <Stack
     alignItems={"center"} 
     spacing={"2rem"}
    >
        <Avatar 
         sx={{
            height: 200,
            width: 200,
            objectFit: "contain",
            marginBottom: "1rem",
            border: "5px solid white"
         }}
        />
        <ProfileCard heading={"Bio"} text={"i am sajal "} Icon={<UserNameIcon/>}/>
        <ProfileCard heading={"UserName"} text={"i am sajal "} Icon={<UserNameIcon/>}/>
        <ProfileCard heading={"Name"} text={"i am sajal2"} Icon={<FaceIcon/>} />
        <ProfileCard heading={"Joined"} text={moment('2024-03-05T00:00:00.000Z').fromNow()} Icon={<CalendarIcon/>} />
    </Stack>
  )
}

const ProfileCard = ({heading, Icon, text}) =>{
    return (
        <Stack
         direction={"row"}
         spacing={"1rem"}
         textAlign={"center"}
         alignItems={"center"}
         color={"white"}
        >
          {Icon && Icon}
          <Stack>
            <Typography variant='body1'>{text}</Typography>
            <Typography variant='caption'>{heading}</Typography>
          </Stack>
        </Stack>
    )
}

export default Profile