const mapMaterialsToCorrectForm = (items) => {
  const allMaterials = items.map((x) => Object.keys(x.materials_created_from));
  const mergedMaterials = new Set([].concat.apply([], allMaterials));
  const materialsDict = [...mergedMaterials].reduce((acc, value) => {
    return { ...acc, [value]: [] };
  }, {});
  return materialsDict;
};

const averageMaterialCosts = (items, ahData) => {
  const materials = mapMaterialsToCorrectForm(items);
  ahData.forEach((x) => {
    materials[x.item.id] &&
      x.buyout !== 0 &&
      materials[x.item.id].push({ buyout: x.buyout, quantity: x.quantity });
  });

  Object.entries(materials).forEach(([key, value]) =>
    value.sort((a, b) => a.buyout / a.quantity - b.buyout / b.quantity)
  );

  return materials;
};

const averageCraftingPricePerOneItem = (items, ahData, materials) => {
  // average crafting cost
  const averageCraftingCosts = averageMaterialCosts(items, ahData);
  const filterByItem = {};

  let totalAverage = 0;

  Object.entries(materials).forEach(([key, value]) => {
    filterByItem[key] = averageCraftingCosts[key];
    let amount = 0;
    let total = 0;
    const max = value * 10;
    let i = 0;

    while (amount < max) {
      amount += filterByItem[key][i].quantity;
      total += filterByItem[key][i].buyout;
      i += 1;
    }

    totalAverage += (total / amount) * value;
  });

  const craftingCalculationWithProcAndCut = ((1.1 * totalAverage) / 1.2) * 0.95;
  return craftingCalculationWithProcAndCut;
};

const profitabilityCalculation = (item, items, ahData, materials) => {
  if (!items || !ahData || !materials) return;

  return (
    ((item - averageCraftingPricePerOneItem(items, ahData, materials)) / item) *
    100
  ).toFixed(1);
};

export default profitabilityCalculation;
