
import React, { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import DashboardLayout from '../Layout/DashboardLayout';


const Dasboard = lazy(() => import("../Pages/Dashboard/Index"))

type LoadComonentProps = {
    component: React.LazyExoticComponent<() => JSX.Element>
}

const LoadComponent = ({ component: Component }: LoadComonentProps) => (
    <Suspense fallback={<div>loading ...</div>}>
        <Component />
    </Suspense>
)

const AllRoutes = () => {

    return useRoutes([
        {
            path: '/',
            element : <DashboardLayout />,
            children: [
                { path: '/', element: <LoadComponent component={Dasboard} /> }
            ]
        }
    ])

}

export default AllRoutes