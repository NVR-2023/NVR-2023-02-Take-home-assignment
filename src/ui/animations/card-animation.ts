export const cardAnimation = {
  initial: {
    scale: 0.9,
    opacity: 0.5,
  },
  animate: { scale: 1, opacity: 1 },
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.18,
      ease: [0.22, 1, 0.36, 1],
      type: "tween",
    },
  },
};
