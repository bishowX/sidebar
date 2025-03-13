import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { TooltipProvider } from "@/components/ui/tooltip";

import "./index.css";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
<TooltipProvider>
  <RouterProvider router={router} />
</TooltipProvider>;

const rootElement = document.getElementById("root");
if (rootElement && !rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <TooltipProvider>
        <RouterProvider router={router} />
      </TooltipProvider>
    </StrictMode>,
  );
}
