import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function RequireAdminAuth() {
    const location = useLocation();
    const [authState, setAuthState] = useState({
        loading: true,
        user: null,
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setAuthState({
                loading: false,
                user,
            });
        });

        return unsubscribe;
    }, []);

    if (authState.loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 text-slate-600">
                Checking admin access...
            </div>
        );
    }

    if (!authState.user) {
        return <Navigate to="/admin/login" replace state={{ from: location }} />;
    }

    return <Outlet />;
}
