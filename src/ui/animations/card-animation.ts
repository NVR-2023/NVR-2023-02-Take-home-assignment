export const cardAnimation = {
  initial: {
    scale: 0.9,
  },
  animate: { scale: 1 },
  exit: {
    scale: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
