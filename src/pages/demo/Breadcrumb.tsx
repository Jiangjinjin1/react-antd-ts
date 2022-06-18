import { Alert, Breadcrumb } from 'antd'
import React from 'react'
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom'

/**
 * 作为根路由测试
 */
const Apps = () => (
    <ul className="app-list">
        <li>
            <Link to="/breadcrumb/1">Application1</Link>：<Link to="/breadcrumb/1/detail">Detail</Link>
        </li>
        <li>
            <Link to="/breadcrumb/2">Application2</Link>：<Link to="/breadcrumb/2/detail">Detail</Link>
        </li>
    </ul>
)

const breadcrumbNameMap: Record<string, string> = {
    '/breadcrumb': 'Application List',
    '/breadcrumb/1': 'Application1',
    '/breadcrumb/2': 'Application2',
    '/breadcrumb/1/detail': 'Detail',
    '/breadcrumb/2/detail': 'Detail',
}

const Home = () => {
    const location = useLocation()
    const pathSnippets = location.pathname.split('/').filter(i => i)

    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{breadcrumbNameMap[url]}</Link>
            </Breadcrumb.Item>
        )
    })

    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/">Home</Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems)

    return (
        <div className="demo">
            <div className="demo-nav">
                <Link to="/">Home</Link>
                <Link to="/breadcrumb">Application List</Link>
            </div>
            <Routes>
                <Route path="/breadcrumb" element={<Apps />} />
                <Route path="*" element={<span>Home Page</span>} />
            </Routes>
            <Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" />
            <Breadcrumb>{breadcrumbItems}</Breadcrumb>
        </div>
    )
}

const Demo7: React.FC = () => (
    <HashRouter>
        <Home />
    </HashRouter>
)

export default Demo7
