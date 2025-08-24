import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import {Servicos} from "./pages/servicos";
import { ErrorPage } from "./pages/error";
import { Perguntas } from "./pages/perguntas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/servicos",
    element: <Servicos/>
  },
  {
    path: "/perguntas",
    element: <Perguntas/>
  },
  {
    path: "*",
    element: <ErrorPage />
  }
])

export { router };
