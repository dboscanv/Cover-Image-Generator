import React from 'react';
import { Toggle } from 'react-powerplug';
import { Plus, Minus } from 'react-feather';

import LabelOption from '../label-option/label-option.component';
import NumberInput from '../number-input/number-input.component';

const FontSize = ({ handleChange, defaultSettings }) => {
	return (
		<Toggle initial={false}>
			{({ on, toggle }) => (
				<>
					<div className="toggle" onClick={toggle} checked={on}>
						{on ? <Minus size="12" /> : <Plus size="12" />} Font Size
					</div>
					{on && (
						<>
							<LabelOption name="Heading Font Size">
								<NumberInput
									handleChange={handleChange}
									name="headingFontSize"
									defaultValue={defaultSettings.headingFontSize}
								/>
							</LabelOption>
							<LabelOption name="Summary Font Size">
								<NumberInput
									handleChange={handleChange}
									name="summaryFontSize"
									defaultValue={defaultSettings.summaryFontSize}
								/>
							</LabelOption>
						</>
					)}
				</>
			)}
		</Toggle>
	);
};

export default FontSize;