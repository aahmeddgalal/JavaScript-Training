function normalizeUnits(manifest) {
  const copy = { ...manifest }
  if (copy.unit == "lb") {
    copy.weight = copy.weight * 0.45
    copy.unit = "kg"
  }
  return copy
}

function validateManifest(manifest) {
  const copy = {}

  if (!("containerId" in manifest)) {
    copy.containerId = "Missing"
  } else if (
    manifest.containerId === null ||
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    copy.containerId = "Invalid"
  }

  if (!("destination" in manifest)) {
    copy.destination = "Missing"
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === "") {
    copy.destination = "Invalid"
  }

  if (!("weight" in manifest)) {
    copy.weight = "Missing"
  } else if (
    manifest.weight === null ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    copy.weight = "Invalid"
  }

  if (!("unit" in manifest)) {
    copy.unit = "Missing"
  } else if (
    manifest.unit !== "lb" && manifest.unit !== "kg"
  ) {
    copy.unit = "Invalid"
  }

  if (!("hazmat" in manifest)) {
    copy.hazmat = "Missing"
  } else if (
    typeof manifest.hazmat !== "boolean"
  ) {
    copy.hazmat = "Invalid"
  }

  return copy
}

function processManifest(manifest) {
  const validation = validateManifest(manifest)
  const isValid = Object.keys(validation).length === 0;
  if (isValid) {
    const normalized = normalizeUnits(manifest)

    console.log(`Validation success: ${normalized.containerId}`)
    console.log(`Total weight: ${normalized.weight} kg`)
  } else {
    console.log(`Validation error: ${manifest.containerId}`)
    console.log(validation)
    return validation
  }
}


console.log(validateManifest({ containerId: 1, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false }))