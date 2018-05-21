import React from 'react'

export default ({ title, placeholder, icon, value, onChange, error }) => (
  <div className="field">
    <label className="label">{title}</label>
    <div className="control has-icons-left has-icons-right">
      <input
        className={`input ${error ? 'is-danger' : ''}`}
        type="email"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <span className="icon is-small is-left">
        <i className={`fas ${icon}`} />
      </span>
      {error && (
        <span className="icon is-small is-right">
          <i className="fas fa-exclamation-triangle" />
        </span>
      )}
    </div>
    <p className="help is-danger">{error}</p>
  </div>
)
