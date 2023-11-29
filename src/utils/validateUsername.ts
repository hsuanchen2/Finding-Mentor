const checkIsUserNameValid = (userName: string): boolean => {
    const nameRegex = new RegExp(/^[a-z ,.'-]+$/i);
    return nameRegex.test(userName);
}

export default checkIsUserNameValid; 