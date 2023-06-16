import { createBrowserHistory } from "history";
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { MovieSummary } from "../pages/MovieSummary";
const browserHistory = createBrowserHistory({ window });

export function AppRoutes() {
  return (
    <HistoryRouter history={browserHistory as any}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary/:id" element={<MovieSummary />} />
      </Routes>
    </HistoryRouter>
  );
}
