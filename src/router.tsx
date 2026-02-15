import {
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from "@tanstack/react-router";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import JobDetailPage from "./pages/JobDetailPage/JobDetailPage";
import resume from "./data/resume";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Header name={resume.name} title={resume.title} />
      <Outlet />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const jobDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/job/$jobId",
  component: () => {
    const { jobId } = jobDetailRoute.useParams();
    return <JobDetailPage jobId={jobId} />;
  },
});

const routeTree = rootRoute.addChildren([indexRoute, jobDetailRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default router;
