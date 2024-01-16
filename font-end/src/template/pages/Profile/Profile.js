import { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProfileService from '../../../service/ProfileService';
import './Profile.css';
import avt from '../../../image/unnamed.jpg';
import FeedbackService from '../../../service/FeedbackService';
function Profile() {
    const [user, setuser] = useState([]);
    const [feedback, setfeedback] = useState([]);

    useEffect(() => {
        ProfileService.GetUser()
            .then((data) => {
                setuser(data);
                console.log("profile", data);
            }
            ).catch((error) => {
                console.log(error);
            })
    }, []);
    useEffect(() => {
        FeedbackService.getAllFeedBack()
            .then((data) => {
                setfeedback(data);
                console.log("feedback", data);
            })
            .catch((error) => {
                console.error("Error fetching feedback:", error);
            });
    }, []);


    return (
        <>
            <div className='profile_page'>
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="tab_totle"
                >
                    <Tab eventKey="profile" title="Thông tin cá nhân" className='tab_item'>
                        <div className='profile_item'>
                            <div className='row m-4'>
                                <div className='col-lg-4'>
                                    <div className='img_profile'>
                                        <img src={avt} className='img_defautl'></img>
                                    </div>
                                    <div className='action'>
                                        <i class="fa-regular fa-pen-to-square "></i>
                                        <i class="fa-solid fa-trash-can"></i>
                                    </div>
                                </div>
                                <div className='col-lg-8'>
                                    <h5 className='text-left pb-3'>Thông tin cá nhân:</h5>
                                    {user.map((user) => (
                                        <>
                                            <div className='name_profile'>
                                                <div className='firtname'>
                                                    <p><strong>Họ:</strong></p>
                                                    <p className='item_getprofile'>{user.firstName}</p>
                                                </div>
                                                <div className='lastname'>
                                                    <p><strong>Tên:</strong></p>
                                                    <p className='item_getprofile'>{user.lastName}</p>
                                                </div>
                                            </div>
                                            <div className='email_profile'>
                                                <p><strong>Email:</strong></p>
                                                <p className='item_getprofile'>{user.email}</p>
                                            </div>
                                            <div className='email_profile'>
                                                <p><strong>Địa chỉ:</strong></p>
                                                <p className='item_getprofile'>{user.address}</p>
                                            </div>
                                            <div className='email_profile'>
                                                <p><strong>Số điện thoại:</strong></p>
                                                <p className='item_getprofile'>{user.phoneNumber}</p>
                                            </div>
                                        </>
                                    ))}
                                </div >
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="nofication" title="Thông báo" className='tab_item'>
                        Tab content for nofication
                    </Tab>
                    <Tab eventKey="product" title="Sản phẩm đã mua" className='tab_item'>
                    </Tab>
                    <Tab eventKey="feedback" title="Đánh giá và phản hồi" className='tab_item'>
                        {feedback && feedback.map((item) => (
                            <div key={item.feedback_id}>
                                <h1>{item.description}</h1>
                            </div>
                        ))}
                    </Tab>
                </Tabs>
            </div >


        </>

    );
}

export default Profile;
