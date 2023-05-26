let isLoggedIn = false;

const setLogin = (data) => {
    isLoggedIn = true;
}

const checkLogin = () => {
    return isLoggedIn;
}

export { setLogin, checkLogin };