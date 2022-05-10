import axios from 'axios';

export function storeUser(profileObj) {
    axios.post('/user/create', profileObj)
        .then(res => {
            console.log(res);
        })
}

