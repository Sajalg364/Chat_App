import { Add as AddIcon } from '@mui/icons-material'
import { Avatar, IconButton, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import React, { memo } from 'react'

const UserItem = ({ user, handler, handlerIsLoading }) => {
    const { name, _id, avatar } = user;
    return (
        <ListItem>
            {/* <ListItemText /> */}
            <Stack
                direction={"row"}
                alignItems={"center"}
                width={"100%"}
                spacing={"1rem"}

            >
                <Avatar />
                <Typography
                    variant='body1'
                    sx={{
                        flexGlow: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "100%"
                    }}
                >
                    {name}
                </Typography>

                <IconButton
                    size='small'
                    sx={{
                        bgcolor: "primary.main",
                        color: "white",
                        "&:hover": {
                            bgcolor: "primary.dark",

                        }  
                    }}
                    onClick={() => handler(_id)}
                    disabled={handlerIsLoading}
                >
                    <AddIcon/>
                </IconButton>
            </Stack>
        </ListItem>
    )
}

export default memo(UserItem);