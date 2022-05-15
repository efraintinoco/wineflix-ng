export interface Wine {
  id: number;
  imageUrl: string;
  progress?: number;
  label: string;
  isNew?: boolean;
  isFinished?: boolean;
}
