import Cookies from "js-cookie";

if (!process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY) {
  throw new Error("Environment variable is not defined");
}

const TOKEN_KEY = process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY;

export const auth = {
  login: (token: string) => {
    Cookies.set(TOKEN_KEY, token, { path: "/" });
  },

  logout: () => {
    Cookies.remove(TOKEN_KEY);
  },

  isAuthenticated: (): boolean => {
    return !!Cookies.get(TOKEN_KEY);
  },
};
