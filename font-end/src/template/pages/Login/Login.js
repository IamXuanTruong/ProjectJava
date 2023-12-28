import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { useState } from 'react';
import UserService from '../../../service/UserService';
import JSAlert from 'js-alert';
import SuccessIcon from '../../../image/success.png';
import failIcon from '../../../image/cancel.png';
function Login() {
    const usehistory = useNavigate();
    const [loading, setLoading] = useState(false);
    const [username, SetUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUserNameError] = useState('');
    const [passwordError] = useState('');
    const handleEmailChange = (e) => {
        SetUsername(e.target.value);
        validateEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const validateEmail = (input) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(input)) {
            setUserNameError('Please enter a valid email address');
        } else {
            setUserNameError('');
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        UserService.Login(username, password)
            .then((response) => {
                console.log(response);
                localStorage.setItem("accessToken", response.data.accessToken)
                window.dispatchEvent(new Event("storage"));
                usehistory('/')
                window.location.reload(true)
                JSAlert.alert("Chào mừng đến với Coolorganic", "Thành công", SuccessIcon).dismissIn(500);

            })
            .catch((error) => {
                console.log(error)

                if (error.response.status === 400) {
                    JSAlert.alert("Vui lòng đăng kí", "Login failed", failIcon).dismissIn(2500);

                } else {
                    JSAlert.alert("Thông tin bạn nhập chưa đúng !", "Login failed", failIcon).dismissIn(2500);
                }
            }).finally(() => {
                setLoading(false);
            })
    }
    return (
        <>
            <div className="login_page">
                <div className="title_login pt-5">
                    <h2>Đăng nhập</h2>
                    <div className='link_cumb'>
                        <a href='#'>Home</a>
                        <p><i class="fa-solid fa-chevron-right"></i></p>
                        <p className='text_title_login'>Đăng nhập</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='form_login'>
                        <h3>ĐĂNG NHẬP TÀI KHOẢN</h3>
                        <div className='media'>
                            <div className='face'>
                                <a href=''><i class="fa-brands fa-facebook-f"></i> facebook</a>
                            </div>
                            <div className='google'>
                                <a href=''><i class="fa-brands fa-google-plus-g"></i> google</a>
                            </div>
                        </div>
                        <div className='input_type'>
                            <input
                                placeholder='Enter your email'
                                type='email'
                                name='email'
                                value={username}
                                onChange={handleEmailChange}
                            />
                            <div className='error-message'>{usernameError}</div>
                        </div>
                        <div className='input_type'>
                            <input
                                placeholder='Enter your password'
                                type='password'
                                name='password'
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <div className='error-message'>{passwordError}</div>
                        </div>
                        <div className='button_type'>
                            <button type='submit'>Đăng Nhập</button>
                        </div>
                        <div className='lose_pass'>
                            <a href='/forgotPassword' className='text_pass'>Quên mật khẩu</a>
                        </div>
                        <div className='text_login'>
                            <p className='pr-2'>Bạn chưa có tài khoản? vui lòng đăng ký </p>
                            <Link to='/register' className='text_pass'> tại đây</Link>
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Login;