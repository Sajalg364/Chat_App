import { Avatar, AvatarGroup, Box, Stack } from '@mui/material'
import React from 'react'

const AvatarCard = ({avatar = [], max=2}) => {
    console.log(max);
    return (
    <Stack direction={"row"} spacing={0.5}>
     <AvatarGroup max={max}>
        <Box height={"3rem"} width={"5rem"} >
           {
            avatar.map((src,index)=>(
                <Avatar
                key={Math.random()*100}
                src={src}
                alt={`Avatar ${index}`}
                style={{
                    width: "3rem",
                    height: "3rem",
                    position: "absolute",
                    // left:{
                    //     xs: `${0.5+index}rem`,
                    //     sm: `${index}rem`,
                    // } ,
                    left: `${index}rem`
                }}
                />
            ))
           } 
        </Box>
     </AvatarGroup>
    </Stack>
  )
}

export default AvatarCard