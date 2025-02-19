import  { useState } from "react";
import CheckboxGroup from "./components/CheckboxGroup.tsx";
import { Option } from "./components/type";
const dummyOptions = [
  { label: "option A", id: "1" },
  { label: "option B", id: "2" },
  { label: "option C", id: "3" },
  { label: "option D", id: "4" },
  { label: "option E", id: "5" },
  { label: "option F", id: "6" },
  { label: "option G", id: "7" },
  { label: "option H", id: "8" },
];
const App = () => {
  const [checkedOptions, setCheckedOptions] = useState<Option[]>([
    dummyOptions[0],
    dummyOptions[2],
  ]);
  const handleChange = (selectedOptions: Option[]) => {
    setCheckedOptions(selectedOptions);
  };
  return (
    <div>
      <h1>Checkbox group</h1>
      <CheckboxGroup
        options={dummyOptions}
        defaultValue={checkedOptions}
        defaultColumns={3}
        onChange={handleChange}
      />
      <h2>Selected items</h2>
      <ul>
        {checkedOptions?.map((option) => (
          <li key={option.id}>{option.label}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;