export const categoryAnimation = {
  variants: {
    hidden: { opacity: 0, y: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.2 },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  },
  initial: "hidden",
  animate: "visible",
  exit: "exit",
};

export const requisiteAnimation = {
  variants: {
    hidden: { opacity: 0, y: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.05, duration: 0.15 },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.15 } },
  },
  initial: "hidden",
  animate: "visible",
  exit: "exit",
};
