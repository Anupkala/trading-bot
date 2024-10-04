export const getMockStockPrice = async () => {
  const price = (Math.random() * 200).toFixed(2);
  return { price: parseFloat(price) };
};