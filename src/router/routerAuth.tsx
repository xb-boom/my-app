import React, { useEffect, ReactNode } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
// import { Button, Empty } from 'antd';
interface ChildCompenontProps {
    children: ReactNode
}
const RouterAuth: React.FC<ChildCompenontProps> = function ({ children }) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    useEffect(() => {
        if (!token) {
            navigate('/login', { replace: true })
        }
    }, [token])

    if (token) {
        return <>{children}</>
    } else {
        return <Navigate to={'/login'} replace={true}></Navigate>
    }

}

export default RouterAuth