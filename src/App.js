import React, { Suspense } from 'react'
// import Login from 
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingSpinner from './UI/LoadingSpinner'
// import Main from 


const Login=React.lazy(()=>import('./pages/Login'))

const Main=React.lazy(()=>import('./pages/Main'))


function App() {
	const isAuth = useSelector((state) => state.auth)
	

	
	// const dispatch=useDispatch()
	// const showModal=useSelector((state)=>state)
	return (
		<BrowserRouter>
		
				<Suspense fallback={
					<div className='centered'>
                       <LoadingSpinner/>
					</div>
				}
				>
				
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/Header' element={<Main/>} 
					/>
				</Routes>
				
		</Suspense>
		</BrowserRouter>
	)
}

export default App
