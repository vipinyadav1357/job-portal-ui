
export const SignUpValidation = (name: string, value: string) => {
    switch (name) {
        case 'name':
            if (value.trim() === '')
                return 'Name is required and should be at least 3 characters long';
            if (!/^[A-Z]/.test(value))
                return 'Name must start with an uppercase letter';
            if (value.length < 3)
                return 'Name must be at least 3 characters long';
            if (!/^[a-zA-Z\s]+$/.test(value))
                return 'Name must contain only letters and spaces';
            if (!/\s/.test(value))
                return 'Name must contain at least one space';
            return "";
        case 'email':
            if (value.trim() === '')
                return 'Email is required';
            const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(value))
                return 'Invalid email format';
            return "";

        case 'password':
            if (value.trim() === '')
                return 'Password is required';
            if (value.length < 8)
                return 'Password must be at least 8 characters long';
            if (!/[A-Z]/.test(value))
                return 'Password must contain at least one uppercase letter';
            if (!/[a-z]/.test(value))
                return 'Password must contain at least one lowercase letter';
            if (!/[0-9]/.test(value))
                return 'Password must contain at least one number';
            if (!/[!@#$%^&*(),.?":{}|<>]/.test(value))
                return 'Password must contain at least one special character';
            return "";
        case 'confirmPassword':
            if (value.trim() === '')
                return 'Confirm Password is required';
            return "";
        case 'AccountType':
            if (value.trim() === '')
                return 'Account Type is required';
            if (value !== 'APPLICANT' && value !== 'EMPLOYER')
                return 'Invalid Account Type';
            return "";
        default:
            return '';
    }
}