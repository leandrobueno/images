import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = '99815c50645bbd5';
const ROOT_URL = 'https://api.imgur.com';

export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token',
        };

        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    },

    fecthImages(token, username) {
        return axios.get(`${ROOT_URL}/3/account/${username}/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
    }
}