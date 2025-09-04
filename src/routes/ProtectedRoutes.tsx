import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { DecodedUser } from "../services/models/DecodedUser";

interface ProtectedRoutesProps {
    children: React.ReactNode;
    assignedRole?: string[];
}

const ProtectedRoutes = ({ children, assignedRole }: ProtectedRoutesProps) => {
    const token = useSelector((state: any) => state.jwt);
    if (!token)
        return <Navigate to="/unauthorized" replace />;
    const decodedToken = jwtDecode<DecodedUser>(token);
    if (assignedRole && !decodedToken.authority.some((role: string) => assignedRole.includes(role))) {
        return <Navigate to="/unauthorized" replace />;
    }
    return (
        <>
            {children}
        </>
    );
}
export default ProtectedRoutes;