export const fadeUp = (dealy) => {
  return {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: dealy, duration: 0.5 },
    },
  };
};
