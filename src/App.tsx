import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Career } from "./pages/Career";
import { PATH } from "./const";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={PATH.HOME} element={<Home />} />
          <Route path={PATH.CAREER} element={<Career />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
