import React from 'react';
import './Palette.css';
import classNames from 'classnames';

const Palette = ({ colors, selected, onSelect }) => {
    const colorList = colors.map(
        (color) => (<Color color={color} active={selected===color} onClick={() => onSelect(color)} key={color}/>)
    );

    return (
        <div className="palette">
            {colorList}
        </div>
    )
}

const Color = ({ color, active, onClick }) => {
    return (
        <div className={classNames('color', { active })} style={{background: color}} onClick={onClick}>
        </div>
    );
};

export default Palette;