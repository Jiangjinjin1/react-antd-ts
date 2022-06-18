import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Demo12: FC = () => {

    return (
        <div className="App">
            父路由
            <Outlet />
        </div>
    )
}

export default Demo12;
