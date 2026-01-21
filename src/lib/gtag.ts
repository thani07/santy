import ReactGA from 'react-ga4';

const TRACKING_ID = "G-DNC0T3ZMC8"; // Replace with your Google Analytics tracking ID

export const initGA = () => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize(TRACKING_ID);
  }
};

export const logPageView = () => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }
};

export const logEvent = (category = '', action = '') => {
  if (process.env.NODE_ENV === 'production') {
    if (category && action) {
      ReactGA.event({ category, action });
    }
  }
};

export const logError = (description = '', fatal = false) => {
  if (process.env.NODE_ENV === 'production') {
    if (description) {
      ReactGA.exception({ description, fatal });
    }
  }
};
