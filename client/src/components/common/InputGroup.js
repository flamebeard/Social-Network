/* eslint-disable react/require-default-props */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const InputGroup = ({
  name, placeholder, value, error, info, onChange, icon, type,
}) => (
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text" style={{ height: '48px', width: '40px' }}>
        <i className={icon} />
      </span>
    </div>
    <input className={classnames('form-control form-control-lg', { 'is-invalid': error })} placeholder={placeholder} name={name} value={value} onChange={onChange} />
    {error && (<div className="is-invalid">{error}</div>)}
  </div>
);

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  error: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

InputGroup.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  type: 'text',
};

export default InputGroup;
