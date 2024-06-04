import { CameraAlt as CameraAltIcon} from '@mui/icons-material';
import { Container, Paper, TextField, Typography, Button, Stack, Avatar, IconButton } from '@mui/material';
import { useState } from 'react'
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import { useFileHandler, useInputValidation } from '6pp';
import { userNameValidator } from '../utils/validators';



const Login = () => {
  const toggleLogin=()=>{
      setIsLogin((prev)=>!prev) 
  }

  const [isLogin, setIsLogin] = useState(true);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", userNameValidator);
  const password = useInputValidation("");
  // const password = useStrongPassword("");

  const avatar = useFileHandler("single");

  const handleLogin=(e)=>{
    e.preventDefault();
  }

  const handleSignUp=(e)=>{
    e.preventDefault();
  }
  
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(0deg, rgba(133,185,193,0.8717612044817927) 15%, rgba(67,124,183,0.8717612044817927) 94%)",
      }}
    >

    
    <Container component={'main'} maxWidth="xs" sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }} >
      <Paper 
       elevation={3}
       sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
       }}
      >
       {isLogin?(
          <>
          <Typography variant="h4">Login</Typography>
          <form 
            style={{
            width: "100%",
            marginTop: "1rem",
            }}
            onSubmit={handleLogin}
          >
            <TextField
              required
              fullWidth
              label='username'
              variant='outlined'
              margin='normal'
              color="success"
              value={username.value}
              onChange={username.changeHandler}
            />
            <TextField
              required
              fullWidth
              label='password'
              type='password'
              variant='outlined'
              margin='normal'
              color="secondary"
              value={password.value}
              onChange={password.changeHandler}
            />

            <Button variant="contained" sx={{marginTop: "2vh"}} color="primary" type='submit' fullWidth>
              Login
            </Button>

            <Typography textAlign={"center"} m={"1rem"}>
                OR
            </Typography>

            <Button variant="text" onClick={toggleLogin} fullWidth>
              Sign Up Instead
            </Button>
          </form>
          </>
       ):(
        <>
        <Typography variant="h4">Sign Up</Typography>
        <form 
          style={{
          width: "100%",
          marginTop: "1rem",
          }}
          onSubmit={handleSignUp}
        >

          <Stack position={"relative"} width={"10rem"} margin={"auto"}>
            <Avatar
              sx={{
                width: "10rem",
                height: "10rem",
                objectFit: "contain"
              }}
              src={avatar.preview}
            />

          <IconButton
            sx={{
              position: "absolute",
              bottom: "0",
              right: "0",
              color: "white",
              bgcolor: "rgb(0 ,0 ,0 , 0.5)",
              ":hover": {
                bgcolor: "rgba(0, 0, 0, 0.9)",
              },
            }}  
            component="label"
            >
            <>
            <CameraAltIcon />
            <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}/>
            </>
          </IconButton>
          </Stack>

          {
            avatar.error &&
            (
              <Typography m={"1rem auto"} width={"fit-content"} display={"block"} color="error" variant="caption">
                {avatar.error} 
              </Typography>
            )
          }

          <TextField
            required
            fullWidth
            label='Name'
            variant='outlined'
            margin='normal'
            color="success"
            value={name.value}
            onChange={name.changeHandler}
          />
          <TextField
            required
            fullWidth
            label='Bio'
            variant='outlined'
            margin='normal'
            color="success"
            value={bio.value}
            onChange={bio.changeHandler}
          />
          <TextField
            required
            fullWidth
            label='Username'
            variant='outlined'
            margin='normal'
            color="success"
            value={username.value}
            onChange={username.changeHandler}
          />

          {
            username.error && (
              <Typography color="error" variant="caption">
                {username.error} 
              </Typography>
            )
          }

          <TextField
            required
            fullWidth
            label='Password'
            type='password'
            variant='outlined'
            margin='normal'
            color="secondary"
            value={password.value}
            onChange={password.changeHandler}
          />

          {
            password.error && (
              <Typography color="error" variant="caption">
                {password.error} 
              </Typography>
            )
          }

          <Button variant="contained" sx={{marginTop: "1vh"}} color="primary" type='submit' fullWidth>
            Sign Up
          </Button>

          <Typography textAlign={"center"} m={"0.5rem"}>
              OR
          </Typography>

          <Button variant="text" onClick={toggleLogin} fullWidth>
            Login Instead
          </Button>
        </form>
        </>
       )}

      </Paper>
    </Container>
    </div>
  )
}

export default Login