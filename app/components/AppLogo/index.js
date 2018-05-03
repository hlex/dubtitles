import React from 'react'

import appIcon from '../../images/logo.svg'

export default (props) => <img onClick={props.onClick} className={`app-logo ${props.className}`} src={appIcon} alt='' />
