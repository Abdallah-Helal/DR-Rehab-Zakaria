import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-4VCP8043K6");
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
