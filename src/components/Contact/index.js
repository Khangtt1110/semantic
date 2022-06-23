import React from 'react';
import { List, Icon, Button, Input } from 'semantic-ui-react';
import styles from './Contact.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Contact = ({ data }) => {
    return (
        <List className={cx('wrapper')}>
            <List.Content className={cx('container')}>{data.title}</List.Content>
            {data.children ? (
                <>
                    {data.children.map((item) => (
                        <Button key={item.name} icon circular className={cx('margin-right')}>
                            <Icon name={item.icon} />
                        </Button>
                    ))}
                </>
            ) : data.description ? (
                <>
                    <List.Description className={cx('description')}>{data.description}</List.Description>
                    <Input
                        fluid
                        action={{ icon: 'send', color: 'youtube' }}
                        placeholder="ENTER YOUR E-MAIL ADDRESS"
                        className={cx('input-btn')}
                    />
                </>
            ) : (
                <>
                    {data.content.map((item) => (
                        <List.Description key={item} className={cx('description')}>
                            {item}
                        </List.Description>
                    ))}
                </>
            )}
        </List>
    );
};

export default Contact;
