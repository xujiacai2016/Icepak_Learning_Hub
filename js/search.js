export function matchesQuery(value, query) {
  return value.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase());
}
