import React from 'react';
import {ReactComponent as Icon} from '../../assets/image/logo.svg';

function Logo() {
    console.log('RERENDER LOGO');
    return <Icon />;
}

export default React.memo(Logo);