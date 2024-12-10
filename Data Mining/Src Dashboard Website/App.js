import "./App.scss";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<>
			{/* 1 */}
			<BrowserRouter>
				<>
					<div className="app-container">
						<AppRoutes />
					</div>
				</>
			</BrowserRouter>
		</>
	);
}

export default App;
