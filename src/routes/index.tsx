import {
  CarRental,
  LocationOn,
  Movie,
  Person,
  Pets,
  Rocket,
} from "@mui/icons-material";
import { ReactNode } from "react";
import { Route } from "react-router-dom";
import FilmDetails from "../components/FilmDetails";
import PeopleDetails from "../components/PeopleDetail";
import PlanetDetails from "../components/PlanetDetails";
import SpeciesDetails from "../components/SpeciesDetail";
import StarshipDetails from "../components/StarshipDetail";
import VehicleDetails from "../components/VehicleDetails";
import HomePage from "../pages/HomePage";
import ResourcePage from "../pages/ResourcePage";

export const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/people",
    element: <ResourcePage />,
    state: "people",
    sidebarProps: {
      displayText: "People",
      icon: <Person />,
    },
  },
  {
    path: "/people/:id",
    element: <PeopleDetails />,
    state: "people",
    sidebarProps: {
      displayText: "People",
      icon: <Person />,
    },
  },
  {
    path: "/planets",
    element: <ResourcePage />,
    state: "planets",
    sidebarProps: {
      displayText: "Planets",
      icon: <LocationOn />,
    },
  },
  {
    path: "/planets/:id",
    element: <PlanetDetails />,
    state: "planets",
    sidebarProps: {
      displayText: "Planets",
      icon: <LocationOn />,
    },
  },
  {
    path: "/starships",
    element: <ResourcePage />,
    state: "starships",
    sidebarProps: {
      displayText: "Starships",
      icon: <Rocket />,
    },
  },
  {
    path: "/starships/:id",
    element: <StarshipDetails />,
    state: "starships",
    sidebarProps: {
      displayText: "Starships",
      icon: <Rocket />,
    },
  },
  {
    path: "/vehicles",
    element: <ResourcePage />,
    state: "vehicles",
    sidebarProps: {
      displayText: "Vehicles",
      icon: <CarRental />,
    },
  },
  {
    path: "/vehicles/:id",
    element: <VehicleDetails />,
    state: "vehicles",
    sidebarProps: {
      displayText: "Vehicles",
      icon: <CarRental />,
    },
  },
  {
    path: "/species",
    element: <ResourcePage />,
    state: "species",
    sidebarProps: {
      displayText: "Species",
      icon: <Pets />,
    },
  },
  {
    path: "/species/:id",
    element: <SpeciesDetails />,
    state: "species",
    sidebarProps: {
      displayText: "Species",
      icon: <Pets />,
    },
  },
  {
    path: "/films",
    element: <ResourcePage />,
    state: "films",
    sidebarProps: {
      displayText: "Films",
      icon: <Movie />,
    },
  },
  {
    path: "/films/:id",
    element: <FilmDetails />,
    state: "films",
    sidebarProps: {
      displayText: "Films",
      icon: <Movie />,
    },
  },
];

const generateRoute = (routes: RouteType[]): ReactNode => {
  return routes.map((route, index) =>
    route.index ? (
      <Route index path={route.path} element={route.element} key={index} />
    ) : (
      <Route path={route.path} element={route.element} key={index}>
        {route.child && generateRoute(route.child)}
      </Route>
    )
  );
};

export const routes: ReactNode = generateRoute(appRoutes);
