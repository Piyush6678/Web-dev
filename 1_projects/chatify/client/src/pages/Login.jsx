import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CameraAlt as CameraIcon } from "@mui/icons-material";
import React, { useState } from "react";
import { VisuallyHiddenInput } from "../components/styles/StyleComponent";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from "../utils/validators";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin((prev) => !prev);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("",usernameValidator
  );
  const password = useStrongPassword();
  const avatar= useFileHandler("single")

  const handleSignup=(e)=>{
    e.preventDefault()
    
  }
  const handleSignin=(e)=>{
    e.preventDefault()
  }
  return (

    <div style={{
        backgroundImage: "linear-gradient(rgb(255, 255, 209), rgba(36, 170, 163, 1))",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }}  >
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
               onSubmit={handleSignin}
            >
              <TextField
                required
                fullWidth
                label="username"
                margin="normal"
                variant="outlined"
                value={username.value}
onChange={username.changeHandler}
              ></TextField>
              
              <TextField
                required
                fullWidth
                label="password"
                margin="normal"
                variant="outlined"
                type="password"
                value={password.value}
onChange={password.changeHandler}
              ></TextField>
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                {" "}
                Submit{" "}
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button variant="text" fullWidth onClick={toggleLogin}>
                Register
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign Up</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={handleSignup}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
               src={avatar.preview}
               
               />
                  {
                avatar.error &&( 
                    <Typography m={"1rem"} color="error" variant="caption" >
                        {avatar.error}
                    </Typography>
                )
              }
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    color: "white",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    ":hover": {
                      backgroundColor: "rgba(0,0,0,0.7)",
                    },
                  }}
                  component="label"
                >
                  <>
                    <CameraIcon />
                    <VisuallyHiddenInput onChange={avatar.changeHandler} type="file"/>
                    
                  </>
                </IconButton>
              </Stack>

              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              ></TextField>
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              ></TextField>
              <TextField
                required
                fullWidth
                label="username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              ></TextField>
              {
                username.error &&( 
                    <Typography color="error" variant="caption" >
                        {username.error}
                    </Typography>
                )
              }
              <TextField
                required
                fullWidth
                label="password"
                margin="normal"
                variant="outlined"
                type="password"
                value={password.value}
                onChange={password.changeHandler}
              ></TextField>
              {
                password.error &&( 
                    <Typography color="error" variant="caption" >
                        {password.error}
                    </Typography>
                )
              }
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                {" "}
                Submit{" "}
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button variant="text" fullWidth onClick={toggleLogin}>
                Login Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
    </div>
  );
};

export default Login;
