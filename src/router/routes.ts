import Home from "@/views/Home.vue";
import { RouteRecordRaw } from "vue-router";

// Type definitions
export const ROUTE_PATHS = {
  Home: "/",
  Budget: "/budget",
} as const;

type RoutePathKey = keyof typeof ROUTE_PATHS;
export type RoutePath = (typeof ROUTE_PATHS)[RoutePathKey];

export const ROUTE_NAMES = {
  Home: "Home",
  Budget: "Budget",
} as const satisfies Record<RoutePathKey, string>;

type RouteNameKey = keyof typeof ROUTE_NAMES;
export type RouteName = (typeof ROUTE_NAMES)[RouteNameKey];

// Routes
export const routes: Array<RouteRecordRaw> = [
  {
    path: ROUTE_PATHS.Home,
    name: ROUTE_NAMES.Home,
    component: Home,
  },
  {
    path: ROUTE_PATHS.Budget,
    name: ROUTE_NAMES.Budget,
    component: () => import("@/views/Budget.vue"),
  },
];
