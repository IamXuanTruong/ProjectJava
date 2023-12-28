import { Link } from 'react-router-dom';
import './Register.css'
import { useState } from 'react';
import UserService from '../../../service/UserService';
import JSAlert from 'js-alert';
import successIcon from '../../../image/success.png';
import failIcon from '../../../image/cancel.png';
function Register() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [firstNameError, setfirstNameError] = useState('');
    const [lastNameError, setlastNameError] = useState('');
    const [addressErr, setAddressErr] = useState('');
    const [phoneNumerErr, setPhoneNumberErr] = useState('');



    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        validateEmail(e.target.value);
    };


    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };



    const handlefirstNameChange = (e) => {
        setfirstName(e.target.value);
    };

    const handlelastNameChange = (e) => {
        setlastName(e.target.value);
    };
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };
    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const validateEmail = (input) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(input)) {
            setEmailError('email không đúng định dạng');
        } else {
            setEmailError('');
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const isValid = handleSubmit();

        if (isValid) {
            setLoading(true);
            const userData = {
                firstName,
                lastName,
                email,
                password,
                role: "USER",
                address,
                phoneNumber
            };

            UserService.createUser(userData)
                .then(response => {
                    JSAlert.alert("Kiểm tra lại email của bạn và xác thực thông tin", "Đăng kí thành công", successIcon).dismissIn(2500);;
                    console.log(response);
                })
                .catch(error => {
                    if (error.response.data) {
                        JSAlert.alert(error.response.data, "Không thể đăng kí", failIcon).dismissIn(2500);;
                    }
                }).finally(() => {
                    setLoading(false);

                })
        }
    };
    const handleSubmit = () => {
        setEmailError('');
        setPasswordError('');
        setfirstNameError('');
        setlastNameError('');
        setAddressErr('');
        setPhoneNumberErr('')
        let isValid = true;
        if (!address) {
            setAddressErr('Vui lòng nhập vào địa chỉ')
        }
        if (!phoneNumber) {
            setPhoneNumberErr('Vui lòng nhập vào số điện thoại')
        }
        if (!email) {
            setEmailError('Vui lòng nhập vào Email');
            isValid = false;
        }
        if (!password) {
            setPasswordError('Vui lòng nhập vào mật khẩu');
            isValid = false;
        }
        if (!firstName) {
            setfirstNameError('Vui lòng nhập vào họ');
            isValid = false;
        }
        if (!lastName) {
            setlastNameError('Vui lòng nhập vào tên');
            isValid = false;
        }


        return isValid;
    };
    return (
        <>
            <div className="login_page">
                <div className="title_login pt-5">
                    <h2>Đăng Kí</h2>
                    <div className='link_cumb'>
                        <a href='#'>Home</a>
                        <p><i class="fa-solid fa-chevron-right"></i></p>
                        <p className='text_title_login'>Đăng kí</p>
                    </div>
                </div>
                <div className='form_login'>
                    <form onSubmit={onSubmit}>
                        <h3>ĐĂNG KÍ TÀI KHOẢN</h3>
                        <div className='media'>
                            <div className='face'>
                                <a href=''><i class="fa-brands fa-facebook-f"></i> facebook</a>
                            </div>
                            <div className='google'>
                                <a href=''><i class="fa-brands fa-google-plus-g"></i> google</a>
                            </div>
                        </div>
                        <div className='input_name'>
                            <div className='firt'>
                                <input placeholder='Họ' type='text'
                                    name='firstName'
                                    value={firstName}
                                    onChange={handlefirstNameChange}
                                ></input>
                                <div className='error-message'>{firstNameError}</div>
                            </div>
                            <div className='name'>
                                <input placeholder='Tên'
                                    type='text'
                                    name='lastName'
                                    value={lastName}
                                    onChange={handlelastNameChange}></input>
                                <div className='error-message'>{lastNameError}</div>
                            </div>
                        </div>
                        <div className='input_type'>
                            <input placeholder='Email'
                                type='email'
                                name='email'
                                value={email}
                                onChange={handleEmailChange}></input>
                            <div className='error-message'>{emailError}</div>
                        </div>
                        <div className='input_type'>
                            <input placeholder='Mật khẩu'
                                type='password'
                                name='password'
                                value={password}
                                onChange={handlePasswordChange}
                            ></input>
                            <div className='error-message'>{passwordError}</div>
                        </div>
                        <div className='input_type'>
                            <input placeholder='Địa chỉ'
                                type='text'
                                name='address'
                                value={address}
                                onChange={handleAddressChange}></input>
                            <div className='error-message'>{addressErr}</div>
                        </div>
                        <div className='input_type'>
                            <input placeholder='Số điện thoại'
                                type='text'
                                name='phoneNumber'
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}></input>
                            <div className='error-message'>{phoneNumerErr}</div>
                        </div>
                        <div className='button_type'>
                            <button type='submit'>Đăng Kí</button>
                        </div>
                    </form>
                    <div className='text_login'>
                        <p className='pr-2'>Bạn đã có tài khoản? vui lòng đăng nhập </p>
                        <Link to='/login' className='text_pass'> tại đây</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Register;