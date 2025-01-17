export const backgroundAnimation = {
  initial: { opacity: 0.7 },
  animate: { opacity: 1 },
  transition: {
    duration: 2.1,
    ease: [0.16, 1, 0.3, 1],
  },
};

export const textLogoAnimation = {
  initial: { opacity: 0.3, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.2,
    ease: [0.16, 1, 0.3, 1],
  },
};

export const buttonAnimation = {
  initial: { opacity: 0.3, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.25,
    delay: 0.025,
    ease: [0.16, 1, 0.3, 1],
  },
};
