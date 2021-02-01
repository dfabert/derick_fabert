import React, {useState} from 'react';
import onClickOutside from 'react-onclickoutside';

function Dropdown( {title, options, multiSelect = false }) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () =>setOpen(!open);
    Dropdown.handleClickOutside = () => setOpen(false);

    function handleOnClick(option) {
        if (!selection.some(current => current === option)) {
            if(!multiSelect) {
                setSelection([option]);
            } else if (multiSelect) {
                setSelection([...selection, option])
            } 
        } else {
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(
                current => current !== option
            );
            setSelection([...selectionAfterRemoval]);
        }
    }

    function isItemInSelection(option) {
        if (selection.find(current => current === option)) {
            return true;
        }
        return false;
    }

    return(
        <div className='dd-wrapper'> 
            <div tabIndex={0} 
            className='dd-header' 
            role='button' 
            onKeyPress={() => toggle(!open)} 
            onClick={() => toggle(!open)}>
                <div className='dd-header_title'>
                    <p className='dd-header_title--bold'>{title}</p>
                </div>
                <div className="dd-header_action">
                </div>
            </div>
            {open && (
                <ul className='dd-list'>
                    {options.map(option => (
                        <li className='dd-list-item'>
                            <button type='button' onClick={() => handleOnClick(option)}>
                                <span>{option}</span>
                                <span>{isItemInSelection(option) && 'Selected'}</span>
                            </button>
                        </li>                        
                    ))}
                </ul>

            )}
        </div>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside (Dropdown, clickOutsideConfig);