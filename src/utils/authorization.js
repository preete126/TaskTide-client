// import { json } from "react-router-dom";

function Is_authorized() {
    let user = localStorage.getItem('token');
    if(user != null) {
        // console.log(JSON.parse(user))
        // user = user
        return user;
    }
    return null;
}

export default Is_authorized;