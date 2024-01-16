import axios from "axios";
const FeedBack_Api_Base_Url = "http://localhost:8080/auth/api/feedback";
const Token = localStorage.getItem("accessToken");
class FeedbackService {
    getAllFeedBack() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: FeedBack_Api_Base_Url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Token,
            },
        };
        return axios.request(config)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }
    createFeedback(feedback) {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: FeedBack_Api_Base_Url + "/create", feedback,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Token,
            },
        };
        return axios.request(config);
    }
    deleteFeedback(id) {
        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: `${FeedBack_Api_Base_Url}/delete/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Token,
            },
        };
        return axios.request(config);
    }
}
export default new FeedbackService();