export interface AddPointsResponse {
  totalPoints: number;
  level: {
    id: number;
    name: string;
  };
  leveledUp: boolean;
}