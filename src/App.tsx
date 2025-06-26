import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import {Servicos} from "./pages/servicos";
import {Contatos} from "./pages/contatos";
import { ErrorPage } from "./pages/error";

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
    path: "/contatos",
    element: <Contatos/>
  },
  {
    path: "*",
    element: <ErrorPage />
  }
])

export { router };
