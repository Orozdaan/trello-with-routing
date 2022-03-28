import React, { useState } from 'react'
import NewProject from '../components/NewProject'
import Project from '../components/Project'
import styled from 'styled-components'
import Header from '../components/Header'
import Modal from '../components/Modal'
import { useSelector } from 'react-redux'

const MainContainer = styled.div`
	width: 1500px;
	padding: 1rem;
	display: flex;
`
const Main = () => {
	
	const show = useSelector((state) => state.project.showModal)
	console.log(show)
	return (
		<>
			
			{show && <Modal />}

			<Header />
			<MainContainer>
				<Project />
				<NewProject />
			</MainContainer>
		</>
	)
}
export default Main
