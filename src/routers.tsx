import React from 'react'
import lazyRequire from './LazyRequire'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

const Demo1 = lazyRequire(() => import('./pages/demo1/index'))

export default () => (
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Demo1 />} />
				<Route path='/demo1' element={<Demo1 />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)
