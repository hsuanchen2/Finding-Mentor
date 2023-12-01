const isValidPassword = (userPassword: string): boolean => {
    const isValidPassword: boolean = userPassword.length >= 6;
    return isValidPassword;
}

export default isValidPassword; 