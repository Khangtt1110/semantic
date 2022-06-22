import { Checkbox } from 'semantic-ui-react';

import React from 'react';

const GenderCheckbox = ({ props }) => {
    return props.map((prop) => (
        <div style={{ margin: '0 2em', display: 'flex' }} key={prop}>
            <label style={{ marginRight: '.5em' }}>{prop}</label>
            <Checkbox />
        </div>
    ));
};

export default GenderCheckbox;
