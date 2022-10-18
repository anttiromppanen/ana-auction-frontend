const addFieldsToCraftables = (craftablesData, craftablesItems) => {
  craftablesData.forEach((x) =>
    craftablesItems.set(x._id, {
      name: x.name,
      icon: x.icon || '',
    })
  );
};

const getCraftablesKeys = (craftablesItems) =>
  Array.from(craftablesItems.keys());

const initializeCraftablesByItem = (craftablesSortedByItem, craftablesKeys) =>
  craftablesKeys.forEach((x) => craftablesSortedByItem.set(x, []));

const addItemsToCraftablesByItem = (
  ahData,
  craftablesItems,
  craftablesSortedByItem
) => {
  ahData.forEach((x) => {
    if (x.buyout <= 0) return;

    const item = craftablesItems.get(x.item.id);
    if (item) {
      craftablesSortedByItem
        .get(x.item.id)
        .push({ ...x, name: item.name, icon: item.icon });
    }
  });
};

const getSortedCraftablesValues = (craftablesSortedByItem) =>
  Array.from(craftablesSortedByItem.values());

const sortCraftablesByBuyout = (craftablesSortedByItemValues) =>
  craftablesSortedByItemValues.map((x) =>
    x.sort((a, b) => a.buyout / a.quantity - b.buyout / b.quantity)
  );

const filterSessionData = (craftablesData) => {
  let sessionAhData = JSON.parse(window.sessionStorage.getItem('sortedAhData'));

  const craftablesItemIDs = craftablesData.map((x) => x._id);
  let filteredData = sessionAhData.map((x) =>
    x.filter((y) => craftablesItemIDs.includes(y.item.id))
  );
  filteredData = filteredData.filter((x) => x.length);

  return filteredData;
};

const renderDataLogic = (
  craftablesData,
  craftablesItems,
  craftablesSortedByItem,
  ahData
) => {
  if (
    window.sessionStorage.getItem('sortedAhData') &&
    window.sessionStorage.getItem('sortedAhData').length > 0
  ) {
    return filterSessionData(craftablesData);
  }

  const auctions = ahData.auctions || [];

  addFieldsToCraftables(craftablesData, craftablesItems);
  const craftablesKeys = getCraftablesKeys(craftablesItems);
  initializeCraftablesByItem(craftablesSortedByItem, craftablesKeys);
  addItemsToCraftablesByItem(auctions, craftablesItems, craftablesSortedByItem);
  const craftablesSortedByItemValues = getSortedCraftablesValues(
    craftablesSortedByItem
  );
  const sortedItems = sortCraftablesByBuyout(
    getSortedCraftablesValues(craftablesSortedByItemValues)
  );

  if (auctions.length) {
    window.sessionStorage.setItem('sortedAhData', JSON.stringify(sortedItems));
    window.sessionStorage.setItem(
      'last_modified',
      JSON.stringify(ahData['last_modified'])
    );
  }
  
  return sortedItems;
};

export default renderDataLogic;
