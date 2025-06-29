import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import {Servicos} from "./pages/servicos";
import {Contatos} from "./pages/contatos";
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
    path: "/contatos",
    element: <Contatos/>
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
