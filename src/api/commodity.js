import axios from "axios"
import * as utils from "src/api/utils.js"

// axios.defaults.baseURL = "http://81.70.62.235:7001"
// axios.defaults.baseURL = "http://localhost:7001"
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + utils.getToken()

export function getAllCommodity(currentPage, pageSize) {
    return axios.get(
        "/api/commodity",
        {
            currentPage: currentPage,
            pageSize: pageSize
        }
    )
}
