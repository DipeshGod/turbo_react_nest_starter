// import { ReactNode } from "react";
import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

export const PublicWrapper = ({ component }: { component: ReactElement }) => {
    const token = localStorage.getItem('jwt_token');
    console.log(token);
    if (token) {
        return (
            <Navigate to="/" replace={true} />
        )
    }
    return (
        <>
            {component}
        </>
    )
}
