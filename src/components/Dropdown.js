import React, { useState } from 'react';

function Dropdown({header, options, filterProjects }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const handleSelection = (item) => {
    filterProjects(item);
    toggle(!open);
  }

  const ddContent = {
    position: 'absolute',
    zIndex: '1',
    maxWidth: '150px',
    margin: '10px',
    backgroundColor: 'black',
    outline: '1px solid grey'
  };

  return (
    <div style={{alignSelf: 'flex-end'}}>
      <div role="button" onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}>
        <div>
          <p >{header}</p>
        </div>
      </div>
      {open && (
        <div style={ddContent}>
          {options.map(item => (
              <div style={{ margin: "5px", color: 'whitesmoke' }} onClick={() => handleSelection(item)}>
                <div>{item}</div>
              </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown