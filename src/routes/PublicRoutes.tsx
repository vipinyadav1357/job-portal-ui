import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface ProtectedRoutesProps {
    children: React.ReactNode;
}

const PublicRoutes = ({ children }: ProtectedRoutesProps) => {
    const token = useSelector((state: any) => state.jwt);
    if (token)
        return <Navigate to="/" replace />;
    return (
        <>
            {children}
        </>
    );
}
export default PublicRoutes;