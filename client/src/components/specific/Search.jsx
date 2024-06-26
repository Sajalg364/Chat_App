import { useInputValidation } from '6pp'
import { Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import React, { useState } from 'react'
import UserItem from '../shared/UserItem'
import { sampleUsers } from '../constants/sampleData'

const Search = () => {

  const search = useInputValidation();
  const [users,setUsers] = useState(sampleUsers)

  let isLoadingSendFriendRequest = false;

  const addFriendHandler = (id)=> {
    console.log(id);
  }

  return (
    <Dialog open>
      <Stack direction={"column"} p={"2rem"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField 
         label=""
         value={search.value} 
         onChange={search.changeHandler}
         variant='outlined'
         size='small'
         InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          )
         }}
         />

         <List>
          {
            users.map((user)=>(
              <UserItem user={user} key={user.id} handler={addFriendHandler} handlerIsLoading={isLoadingSendFriendRequest}/>
            ))
          }
         </List>
      </Stack>
    </Dialog>
  )
}

export default Search