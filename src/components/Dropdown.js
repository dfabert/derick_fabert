import React, { useState } from 'react';

function Dropdown({header, options, filterProjects }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const handleSelection = (item) => {
    filterProjects(item);
    toggle(!open);
  }

  return (
    <div style={{alignSelf: 'flex-end'}}>
      <div role="button" onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}>
        <div>
          <p>{header}</p>
        </div>
      </div>
      {open && (
        <list>
          {options.map(item => (
              <div style={{ margin: "5px", float: 'left', color: 'whitesmoke' }} onClick={() => handleSelection(item)}>
                <ul>{item}</ul>
              </div>
          ))}
        </list>
      )}
    </div>
  );
}

export default Dropdown