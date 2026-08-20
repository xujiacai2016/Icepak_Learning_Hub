const cache = new Map();

export async function loadData(name) {
  if (!cache.has(name)) {
    const response = await fetch(`../data/${name}.json`);
    if (!response.ok) throw new Error(`Unable to load ${name}.json`);
    cache.set(name, response.json());
  }
  return cache.get(name);
}
