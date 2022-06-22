import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const RectangleButton = ({ name, color, size, icon = false, height, width }) => {
    return (
        <Button color={color} size={size} style={{ height: height || '50 ', width: width || '170px' }}>
            <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px' }}>
                <span>{name}</span>
                {icon && (
                    <Icon
                        name={icon}
                        bordered
                        style={
                            name
                                ? { fontSize: '1.2rem' }
                                : {
                                      fontSize: '2rem',
                                      margin: 0,
                                      height: 0,
                                      display: 'flex',
                                      alignItems: 'center',
                                  }
                        }
                    />
                )}
            </p>
        </Button>
    );
};

export default RectangleButton;
