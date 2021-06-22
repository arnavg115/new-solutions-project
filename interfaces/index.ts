export interface themeDispatch {
  type: string;
}
export interface theme {
  theme: string;
}

export interface action {
  type: string;
}

export interface state {
  theme: "light" | "dark";
}
