export const backgroundAnimation = {
  initial: { opacity: 0.1 },
  animate: { opacity: 1 },
  transition: {
    duration: 4.5,
    ease: [0.16, 1, 0.3, 1],
  },
};

export const textLogoAnimation = {
  initial: { opacity: 0.5, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.5,
    ease: [0, 0.55, 0.45, 1],
  },
};

export const buttonAnimation = {
  initial: { opacity: 0.5, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.55,
    delay: 0.03,
    ease: [0, 0.55, 0.45, 1],
  },
};
