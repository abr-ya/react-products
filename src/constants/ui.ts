interface IMenuItem {
  path: string;
  title: string;
}

export const topMenu: IMenuItem[] = [
  { path: "/", title: "Home" },
  { path: "/user", title: "User" },
  { path: "/products", title: "Products" },
  { path: "/recipes", title: "Recipes" },
  { path: "/hikings", title: "Hikings" },
];

export const HEIGHT = {
  header: 64,
  footer: 48,
};

// todo: from Back?!
export const EATING_TIMES = [
  { id: "1", name: "Завтрак" },
  { id: "2", name: "Обед" },
  { id: "3", name: "Ужин" },
  { id: "0", name: "Перекус" },
];
