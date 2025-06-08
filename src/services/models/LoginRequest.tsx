export interface LoginRequest {
    email: string;
    password: string;
    confirmPassword?: string;
}