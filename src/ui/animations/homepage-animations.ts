export const backgroundAnimation = {
  initial: { opacity: 0.21 },
  animate: { opacity: 1 },
  exit: { opacity: 0, x: -100 },
  transition: {
    duration: 1.5,
    ease: [0.43, 0.13, 0.23, 0.96],
  },
};

export const textLogoAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, x: -100 },
  transition: {
    duration: 0.2,
    ease: [0.43, 0.13, 0.23, 0.96],
  },
};

export const buttonAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, x: -100 },
  transition: {
    duration: 0.25,
    delay: 0.025,
    ease: [0.87, 0, 0.13, 1],
  },
};
