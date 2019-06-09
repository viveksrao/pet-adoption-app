import React, { useState } from 'react';

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown=${label.replace(" ", "").toLowerCase()}`
  const Dropdown = () => (
    <div className="form-group">
      <label htmlFor={id}>
        {label}
      </label>
      <select className="form-control" id={id} value={state} onChange={e => setState(e.target.value)} onBlur={e => setState(e.target.value)} disabled={options.length === 0}>
        <option>All</option>
        {options.map(item => <option key={item} value={item}>{item}</option>)}
      </select>
    </div>
  );
  return [state, Dropdown, setState];

}
export default useDropdown;