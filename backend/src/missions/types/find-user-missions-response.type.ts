import { Mission } from "../models/mission.model";

export interface FindUserMissionsResponse {
  availableMissions: Mission[];
  completedMissions: Mission[];
}