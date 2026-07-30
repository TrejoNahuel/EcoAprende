export const MissionFrequency = {
  DAILY: 'daily',
  WEEKLY: 'weekly',
} as const;

export type MissionFrequency = typeof MissionFrequency[keyof typeof MissionFrequency];