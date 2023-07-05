import { useState } from "react";
import { useDispatch } from "react-redux";
import { IMAGES } from "../../constant/Images";
import { Box, Button, Container, TextField } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { alert } from "../../utils/alert";
import '../../assets/login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const errorData = validate(true);
        if (errorData.isValid) {
            const sendData = {
                "USERMASTER": {
                    Ip: "",
                    UserName: username,
                    Password: password
                }
            };
            // dispatch(authActions.login(sendData));
        }
    };

    const validate = (isSubmitted) => {
        const validObj = {
            isValid: true,
            message: ""
        };

        let isValid = true;
        const retData = {
            username: validObj,
            password: validObj,
            isValid
        };

        if (isSubmitted) {
            if (!username) {
                retData.username = {
                    isValid: false,
                    message: alert.error("User Name is required")
                };
                isValid = false;
            }
            if (!password) {
                retData.password = {
                    isValid: false,
                    message: alert.error("Password is required")
                };
                isValid = false;
            }
        }
        retData.isValid = isValid;
        return retData;
    };

    const errorData = validate(isSubmitted);

    return (
        <>
            <div className="login-wrapper">
                <div className='mb-20 mt-3 ml-2'>
                    <img src={IMAGES.LOGO2} alt="" width="10%" />
                </div>
                <div id="formContent" className='mt-5 formContent' >
                    <Box className='mt-2 mb-3 d-flex justify-content-center align-items-center'>
                        <img src={IMAGES.LOGO} alt="" style={{ width: "260px" }} />
                    </Box>
                    <Container component="main" maxWidth="xs">
                        <form className="form" noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="User Name"
                                name="username"
                                autoComplete="username"
                                defaultValue="Small"
                                size="small"
                                autoFocus
                                value={username}
                                onChange={handleInputChange}
                            />
                            <span className="text-danger">
                                {errorData.username.message}
                            </span>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                defaultValue="Small"
                                size="small"
                                autoComplete="current-password"
                                value={password}
                                onChange={handleInputChange}
                            />
                            <span className="text-danger">
                                {errorData.password.message}
                            </span>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                                onClick={handleSubmit}
                            // disabled={user_login_status === status.IN_PROGRESS}
                            >
                                Sign In
                            </Button>
                        </form>
                    </Container>
                </div>
                <Box mt={6}>
                    {/* <Copyright /> */}
                </Box>
            </div>
            <div className='submit_footer'>
                <div className='submit_footer_text'>
                    < div className='submit_footer_img'>
                        <EmailIcon />
                        <p>dilipe9@gmail.com</p>
                    </div>
                    <div className='submit_footer_img'>
                        <LocalPhoneIcon />
                        <p>7597788711</p>
                    </div>
                </div>
                <div className='submit_footer_date'>
                    <p>2023 <img src={IMAGES.COPY_RIGHT_WHITE_ICON} alt="" width={"20"} />  Mayank Softwares Solution</p>
                </div>
            </div>
        </>
    );
};

// function mapStateToProps(state) {
//     const { user_login_status, user } = state.procurement;
//     return {
//         user_login_status,
//         user
//     };
// }

// const connectedLogin = connect(mapStateToProps)(Login);
export default Login;
