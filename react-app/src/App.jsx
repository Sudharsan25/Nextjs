import { useState } from 'react';
import './App.css';
import MainHeader from './components/MainHeader';
import PostList from './components/PostList';

function App() {
	const [showModal, setShowModal] = useState(false);

	function closeModalHandler() {
		setShowModal(false);
	}

	function openModalHandler() {
		setShowModal(true);
	}

	return (
		<>
			<MainHeader onCreatePost={openModalHandler} />
			<main>
				<PostList onCloseModal={closeModalHandler} showModal={showModal} />
			</main>
		</>
	);
}

export default App;
