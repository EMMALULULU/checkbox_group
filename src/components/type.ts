export type CheckboxGroupProps<T> = {
    options: T[];
    defaultValue?: T[];
    defaultColumns?: number;
    onChange: (selected: T[]) => void;
  };
  export type Option = {
    label: string;
    id: string;
  };