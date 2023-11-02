import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { LAYOUT_ROUTES } from "./routes/layoutRouter";
import ReactDOM from "react-dom"; 
import MainLayout from "./stories/template/common/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
        {LAYOUT_ROUTES.map((route) => {
          return (
            <Route key={route.name} path={route.path()} element={<route.component />} />
          )
        })}
        </Route>
      </Routes>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
