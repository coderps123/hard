import classNames from 'classnames';
import React from 'react';

const Button = (props) => {
    const { type = 'default', children = '', plain = false, round = false, circle = false } = props;
    console.log(type);
    const className = classNames('h-button', {
        [`h-button--${type}`]: true,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
    });
    return React.createElement("button", { className: className }, children);
};

export { Button };
//# sourceMappingURL=index.js.map
