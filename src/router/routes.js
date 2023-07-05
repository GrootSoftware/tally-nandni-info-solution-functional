import { lazy } from 'react';

const Login = lazy(() => import('../layouts/Login/Login'));

export const publicRoutes = [
    { path: '/prelogin/login', exact: true, name: 'Login', element: Login },
]