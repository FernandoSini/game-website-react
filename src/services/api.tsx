export const authenticate = (jwt: any, next: any) => {
    // return fetch(,{});
}

export const signup = (user: any) => {
    return fetch(`http://localhost:9090/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response;
    }).catch(err => {
        return err
    });
}
export const login = (user: any) => {

    return fetch(`http://localhost:9090/login`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response;
    }).catch(err => {
        return err
    });
}

export const signout = (next: any) => {

}

export const isAuthenticated = () => { }