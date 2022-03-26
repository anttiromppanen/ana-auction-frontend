const currencyFormatting = (value) => {
  const copper = value % 100;
  const silver = Math.floor(value / 100) % 100;
  const gold = Math.floor(value / 10000);

  return { copper, silver, gold };
};

export default currencyFormatting;
