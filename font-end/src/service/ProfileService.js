import axios from 'axios';
const PROFILE_BASE_URL = "http://localhost:8080/api/register/profile"
class ProfileService {
    GetUser() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: PROFILE_BASE_URL,
            headers: {}
        };

        return axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                throw error;
            });

    }
}
export default new ProfileService();