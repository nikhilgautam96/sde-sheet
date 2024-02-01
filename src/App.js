import ProblemSet from './Page/ProblemSet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/problems" element={<ProblemSet />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
