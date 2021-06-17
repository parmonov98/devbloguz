import React from 'react'

const Alert = ({ alert }) => {

    return (
        alert != null ? (
            <div className={`alert alert-dismissible fade show alert-${alert.type}`} role="alert">
                {alert.message}
            </div>
        ) : ''
    )
}

export default Alert;
