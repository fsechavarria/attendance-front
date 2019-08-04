const routeIds = () => {
  let id = 0;
  return route => ({ ...route, id: ++id });
};

export const generateRouteIds = routeIds();
