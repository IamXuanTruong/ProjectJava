import { Link, useNavigate } from "react-router-dom";
import UserService from "../../../service/UserService";
import JSAlert from "js-alert";
import { useState } from "react";
import SuccessIcon from "../../../image/success.png";
import failIcon from "../../../image/cancel.png";

function ForgotPassword() {
    const usehistory = useNavigate();
    const [username, SetUsername] = useState('');
    const [usernameError, setUserNameError] = useState('');

    const handleEmailChange = (e) => {
        SetUsername(e.target.value);
        validateEmail(e.target.value);
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
        console.log("hellooooo");
        e.preventDefault();
        UserService.ResetEmailRequest(username)
            .then((response) => {
                console.log(response);
                JSAlert.alert("Kiểm tra email để đổi mật khẩu", "Thành công", SuccessIcon).dismissIn(2500);
                usehistory('/login')
            })
            .catch((error) => {
                console.log(error);
                JSAlert.alert("Email không hợp lệ", "Thất bại", failIcon).dismissIn(2500);
            }).finally(() => {
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
                        <h3>Đổi mật khẩu</h3>
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

                        <div className='button_type'>
                            <button type='submit'>Send mail</button>
                        </div>
                        <div className='text_login'>
                            <p className='pr-2'>Bạn chưa có tài khoản? vui lòng đăng ký </p>
                            <Link to='/login' className='text_pass'> tại đây</Link>
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
} export default ForgotPassword;