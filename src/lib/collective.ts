import collectiveStates from "../data/collective_states.json";

export type CollectiveIndex = {
  anxiety: number;
  fragmentation: number;
  energy: number;
  archetypalShift: number;
};

export function getCollectivePulse() {
  return collectiveStates;
}
