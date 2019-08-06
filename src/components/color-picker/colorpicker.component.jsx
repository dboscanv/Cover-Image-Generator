import React, { useState } from 'react';
import { TwitterPicker } from 'react-color';
import './colorpicker.styles.scss';

const ColorPicker = ({ changeSettings, name, defaultValue }) => {
	const [toggle, setToggle] = useState(false);
	const [current, setCurrent] = useState(false);
	const showColorPicker = () => setToggle(!toggle);

	const updateSettigs = ({ hex }) => {
		changeSettings(name, hex);
		setCurrent(hex);
	};

	return (
		<div>
			<div className="color-picker">
				<div className="swatch" onClick={showColorPicker}>
					<div className="color" style={{ background: current || defaultValue }} />
					{toggle && <span>&#10005;</span>}
				</div>
				<div className="picker">
					{toggle && <TwitterPicker color={defaultValue} onChange={updateSettigs} triangle="hide" />}
				</div>
			</div>
		</div>
	);
};

export default ColorPicker;
