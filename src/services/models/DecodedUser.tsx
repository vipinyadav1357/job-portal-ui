export interface DecodedUser {
    name: string;
    id: number;
    sub: string;
    iat: number;
    exp: number;
    authority: string[];
    email: string;
}
