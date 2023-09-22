export function validPasswordModule(password) {
    let regex = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{8,12}$/;
    return regex.test(password);
}

export function randomMath() {
    const num = Math.floor(Math.random() * (999999 - 0 + 1)) + 0;
    return num;
}
