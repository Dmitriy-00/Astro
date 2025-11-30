import archetypes from "../data/archetypes.json";

export type ArchetypeVector = Record<string, number>;

export function getArchetypes() {
  return archetypes;
}

export function describeArchetype(id: string) {
  const archetype = archetypes.find((item) => item.id === id);
  return archetype ?? archetypes[0];
}
