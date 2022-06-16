import React from 'react'
import lazyRequire from './LazyRequire'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

const Button = lazyRequire(() => import('./pages/demo/Button'))
const Icon = lazyRequire(() => import('./pages/demo/Icon'))
const Typography = lazyRequire(() => import('./pages/demo/Typography'))
const Layout = lazyRequire(() => import('./pages/demo/Layout'))
const Layout2 = lazyRequire(() => import('./pages/demo/Layout2'))
const Layout3 = lazyRequire(() => import('./pages/demo/Layout3'))
const Breadcrumb = lazyRequire(() => import('./pages/demo/Breadcrumb'))
const PageHeader = lazyRequire(() => import('./pages/demo/PageHeader'))
const Cascader = lazyRequire(() => import('./pages/demo/Cascader'))
const Form1 = lazyRequire(() => import('./pages/demo/Form1'))
const Form2 = lazyRequire(() => import('./pages/demo/Form2'))

export default () => (
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Button />} />
				<Route path='/button' element={<Button />} />
				<Route path='/icon' element={<Icon />} />
				<Route path='/typography' element={<Typography />} />
				<Route path='/layout' element={<Layout />} />
				<Route path='/layout2' element={<Layout2 />} />
				<Route path='/layout3' element={<Layout3 />} />
				<Route path='/breadcrumb' element={<Breadcrumb />} />
				<Route path='/pageHeader' element={<PageHeader />} />
				<Route path='/cascader' element={<Cascader />} />
				<Route path='/form1' element={<Form1 />} />
				<Route path='/form2' element={<Form2 />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)
