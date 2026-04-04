export interface Specialization {
  id: string;
  name: string;
  minGrade: number;
  jobs: string[];
  description: string;
  category: string;
  streams: string[];
  marketDemand: number; // 1 to 10
}
