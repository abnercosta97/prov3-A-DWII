export interface ColorProps {
  id?: number;
  red: number;
  green: number;
  blue: number;
  message?: string;
}
export interface ResultProps {
  count: number;
}

export interface ContextProps {
  colors: ColorProps[];
  remove: (id: number) => Promise<void>;
  create: (color: ColorProps) => Promise<void>;
}