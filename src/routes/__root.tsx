import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { Header } from '../components/Header';

export const Route = createRootRoute({
  component: Root
});

function Root() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Header />
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  );
}
