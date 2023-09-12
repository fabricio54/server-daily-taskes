export function validPasswordModule(password) {
    let regex = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{8,12}$/;
    return regex.test(password);
}
