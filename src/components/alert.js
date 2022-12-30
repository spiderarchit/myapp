import React from 'react'

export default function alert(props) {
  return (
    props.alertss && <div className={`alert alert-${props.alertss.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alertss.type}</strong>: {props.alertss.msg}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  )
}
