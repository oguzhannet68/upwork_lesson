import store from "../store";
export default (to, from, next) => {
  if (to.matched.some((record) => record.meta.loginRequired)) {
    const user = store.getters.getUser;
    if (user) {
      const roleArrayHierarchic = to.matched
        .filter((x) => x.meta.roles)
        .map((x) => x.meta.roles);
      if (roleArrayHierarchic.every((x) => x.includes(user.yetki))) {
        next();
      } else {
        next("/");
      }
    } else {
      next("/");
    }
  } else {
    next();
  }
};
