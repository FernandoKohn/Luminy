import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "./components/pages/Home"

export const App = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/Projeto" element={<Projeto/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
