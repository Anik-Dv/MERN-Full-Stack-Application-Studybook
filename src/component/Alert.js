import React from 'react';

function Alert(props) {
    const Capitalize = (word) => {
        if (word=== "danger") {
            word = "error"
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <>
      <div style={{ height: '31px' }}>
            {...props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{ height: '400px', paddingBottom: '38px' }}>
                <h6><strong>{Capitalize(props.alert.type)}</strong>: {props.alert.msg}</h6>
            </div>}</div>
    </>

  );
}

export default Alert;
