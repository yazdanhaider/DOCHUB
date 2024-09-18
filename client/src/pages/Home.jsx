import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
function Home() {
	const navigate = useNavigate();
	function createNewDocument() {
		const id = uuidV4();
		navigate(`/document/${id}`);
	}

	return (
		<div className='home_container'>
			<button className='docs_button' onClick={createNewDocument}>
				Start a new document
			</button>
		</div>
	);
}

export default Home;
