import { Routes, Route } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import TextEditor from "./pages/TextEditor";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/document/:id' element={<TextEditor />} />
			</Routes>
		</>
	);
}

export default App;
