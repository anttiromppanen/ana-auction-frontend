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
      materials[x.item.id].push({ buyout: x.buyout, quantity: x.quantity });
  });

  Object.entries(materials).forEach(([key, value]) =>
    value.sort((a, b) => a.buyout - b.buyout)
  );

  const newMats = Object.entries(materials).map(([key, value]) =>
    value.filter((x) => x.buyout > 0)
  );

  return newMats;
};

const profitabilityCalculation = (items, ahData) => {
  if (!items || !ahData) return;
  // average crafting cost
  const averageCraftingCosts = averageMaterialCosts(items, ahData);
  return averageCraftingCosts;
};

export default profitabilityCalculation;
