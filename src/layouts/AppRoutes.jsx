import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from '../router/routes'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                {publicRoutes.map((route, i) => (
                    <Route path={route.path} element={<route.element />} key={i} />
                ))}
            </Routes>
        </>
    )
}

export default AppRoutes
