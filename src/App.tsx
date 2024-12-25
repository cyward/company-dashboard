import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Career } from "./pages/Career";
import { PATH } from "./const";
import { PageTransition } from "./components/common/PageTransition";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <PageTransition>
          <Routes>
            <Route path={PATH.HOME} element={<Home />} />
            <Route path={PATH.CAREER} element={<Career />} />
          </Routes>
        </PageTransition>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
