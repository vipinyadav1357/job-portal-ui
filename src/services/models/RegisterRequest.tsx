export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    accountType: "APPLICANT" | "EMPLOYER";
}