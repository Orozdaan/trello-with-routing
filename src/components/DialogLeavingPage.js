import styled from 'styled-components'

const DialogPage = styled.div`
	width: 200px;
	height: 100px;
	border-radius: 3px;
	background-color: #fff;
	padding: 2rem;
	justify-content: space-around;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 100;
`
const Backdrop = styled.div`
	position: fixed;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
	background: rgba(0, 0, 0, 0.7);
	z-index: 10;
`
const Button = styled.button`
	margin: 10px;
	background-color: green;
	border: none;
	color: #fff;
	height: 25px;
	border-radius: 4px;
	margin-bottom: 250px;
`
const DialogLeavingPage = ({
	setShowDialog,
	cancelNavigation,
	confirmNavigation,
}) => {
	const handleDialogClose = () => {
		setShowDialog(false)
	}

	return (
		<>
			<Backdrop />
			<DialogPage>
				<p>Are you sure want to proceed?</p>
				<div>
					<Button onClick={cancelNavigation}>No</Button>
					<Button onClick={confirmNavigation}>Yes</Button>
				</div>
			</DialogPage>
		</>
	)
}
export default DialogLeavingPage
