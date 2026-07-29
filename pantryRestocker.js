const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
  const myObjs = []
  const seenSKUs = new Set();

  for (const item of rawData) {
    const myArr = item.split("|")
    const sku = myArr[0]

    if (seenSKUs.has(sku)) {
      continue;
    }

    seenSKUs.add(sku);


    myObjs.push({
      sku: myArr[0],
      name: myArr[1],
      qty: Number(myArr[2]),
      expires: myArr[3],
      zone: myArr[4] ?? "general"
    })
  }
  return myObjs;
}

function planRestock(pantry, shipment) {
  const myArray = []

  for (const item of shipment) {
    const existingItem = pantry.find(
      pantryItem => pantryItem.sku === item.sku
    );

    let type = ""

    if (item.qty <= 0) {
      type = "discard"
    } else if (existingItem) {
      type = "restock"
    } else {
      type = "donate"
    }
    myArray.push({
      type, item
    })
  }
  return myArray
}

function groupByZone(actions) {
  const myObj = {}

  for (const action of actions) {
    const zone = action.item.zone

    if (zone in myObj) {
      myObj[zone].push(action)
    } else {
      myObj[zone] = [action]
    }
  }
  return myObj;
}

function clonePantry(pantry) {
  return structuredClone(pantry)
}



const shipment = parseShipment(rawData);

const actions = planRestock(pantry, shipment);

const grouped = groupByZone(actions);

console.log(grouped);