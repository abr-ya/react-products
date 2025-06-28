interface IMenuItem {
  path: string;
  title: string;
}

export const topMenu: IMenuItem[] = [
  { path: "/", title: "Home" },
  { path: "/user", title: "User" },
  { path: "/products", title: "Products" },
  { path: "/recipes", title: "Recipes" },
];

export const HEIGHT = {
  header: 64,
  footer: 48,
};
