import { Navigate } from "react-router-dom";

export const DefaultWrapper = () => {
    return (
        <Navigate to="/dashboard" replace={true} />
    )
}
