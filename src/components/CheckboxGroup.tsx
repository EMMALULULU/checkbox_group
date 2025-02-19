import { useState } from "react";
import { CheckboxGroupProps,Option } from "./type";

export default function CheckboxGroup<T extends Option>({
  defaultValue = [],
  defaultColumns = 5,
  options,
  onChange,
}: CheckboxGroupProps<T>) {
  const [selectedIds, setSelectedIds] = useState<string[]>(
    defaultValue.map((option) => option.id)
  );
  const [columns, setColumns] = useState(defaultColumns);
  //   columns number handler
  const handleIncreaseColumns = () => {
    if (columns < options.length) {
      setColumns(columns + 1);
    }
  };
  const handleDecreaseColumns = () => {
    if (columns > 1) {
      setColumns(columns - 1);
    }
  };
  //   checkbox status handler
  const isAllSelected = selectedIds.length === options.length;
  const toggleCheckbox = (option: Option) => {
    setSelectedIds((prev) => {
      const updatedSelectedIds = prev.includes(option.id)
        ? prev.filter((id) => id !== option.id)
        : [...prev, option.id];
      onChange(
        options.filter((option) => updatedSelectedIds.includes(option.id))
      );
      return updatedSelectedIds;
    });
  };
  const handleSelectAll = () => {
    setSelectedIds((prev) => {
      const updatedSelectedIds =
        prev.length === options.length
          ? []
          : options.map((option) => option.id);
      onChange(
        options.filter((option) => updatedSelectedIds.includes(option.id))
      );
      return updatedSelectedIds;
    });
  };
  const rows = Math.round(options.length / columns);
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          margin: "10px",
          justifyContent: "center",
        }}
      >
        <label>Columns:</label>
        <button disabled={columns === 1} onClick={handleDecreaseColumns}>
          -
        </button>
        {columns}
        <button
          disabled={columns === options.length}
          onClick={handleIncreaseColumns}
        >
          +
        </button>
      </div>
      <label style={{ marginBottom: "10px", display: "block" }}>
        <input
          type="checkbox"
          checked={isAllSelected}
          onChange={handleSelectAll}
        />
        Select All
      </label>
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridAutoColumns: "minmax(100px, auto)",
          gap: "10px",
        }}
      >
        {options.map((option, ) => {
          return (
            <label key={option.id}>
              <input
                type="checkbox"
                checked={selectedIds.includes(option.id)}
                onChange={() => toggleCheckbox(option)}
              />
              {option.label}
            </label>
          );
        })}
      </div>
    </div>
  );
}