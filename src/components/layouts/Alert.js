import React from 'react'

const Alert = ({ alert }) => {

    return (
        alert != null ? (
            <div className={`alert alert-dismissible fade show alert-${alert.type}`} role="alert">
                {alert.message}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        ) : ''
    )
}

export default Alert;
