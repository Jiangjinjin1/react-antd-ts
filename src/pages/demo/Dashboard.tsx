import React, { FC } from 'react'

import { Route, Routes } from 'react-router-dom'

import DashboardGraphs from './DashboardGraphs'
import InvoiceList from './InvoiceList'

const Demo16: FC = () => {
    return (
        <div>
            <p>Look, more routes!</p>
            <Routes>
                <Route path="/" element={<DashboardGraphs />} />
                <Route path="invoices" element={<InvoiceList />} />
            </Routes>
        </div>
    )
}

export default Demo16
