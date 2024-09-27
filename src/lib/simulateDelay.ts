export const simulateDelay = async (delay: number = 600) =>
  await new Promise((resolve) => {
    setTimeout(() => resolve(""), delay);
  });
