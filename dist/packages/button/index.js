import React from 'react';

const Button = (props) => {
    const { type = 'default' } = props;
    console.log(type);
    return (React.createElement(React.Fragment, null,
        React.createElement("button", null, "\u6309\u94AE")));
};

export { Button };
//# sourceMappingURL=index.js.map
