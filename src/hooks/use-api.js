import { useSelector } from "react-redux";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const mapState = (state) => ({ lang: state.lang });

export default function useApi() {
    const { lang } = useSelector(mapState);

    const getHeaders = (contentType = "application/json") => ({
        "Content-Type": contentType,
    });

    const callApi = (method, url, data, contentType = "application/json") => {
        const apiObject = {
            method,
            url: `${apiUrl}${url}&lang=${lang}&appid=${apiKey}`,
            timeout: 30000,
            headers: getHeaders(contentType),
        };

        if (data) {
            apiObject.data = data;
        }

        return axios(apiObject);
    };

    const handleError = (error) => {
        console.error(error);
        return Promise.reject(error);
    };

    return {
        get: (url, contentType) => callApi("GET", url, null, contentType).catch((reason) => handleError(reason)),
        post: (url, data = {}, contentType) => callApi("POST", url, data, contentType).catch((reason) => handleError(reason)),
        put: (url, data = {}, contentType) => callApi("PUT", url, data, contentType).catch((reason) => handleError(reason)),
        delete: (url, contentType) => callApi("DELETE", url, null, contentType).catch((reason) => handleError(reason)),
    };
}
