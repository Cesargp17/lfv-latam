import axios from "axios";

const lfvApi = axios.create({
    baseURL: '/api'
});

export default lfvApi;