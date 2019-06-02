import React, { useState } from 'react';
import useFormApi from '../hooks/useFormApi';

const ScopeArrayField = ({ field, children, keyField }) => {
  const formApi = useFormApi();

  var initialValues = formApi.getInitialValue(field)
  if (!initialValues) {
    throw("initialValue required for ScopeArrayField " + field)
  }
  if (!Array.isArray(initialValues)) {
    throw("initialValue should be an array for ScopeArrayField " + field)
  }

  const remove = i => {
    initialValues.splice(i, 1);
  };

  const add = (value) => {
    initialValues.push(value)
    var currentState = formApi.getValue(field)
  };

  const fields = initialValues.map((value, i) => {
    return {
      key: keyField ? value[keyField] : i,
      field: `${field}[${i}]`,
      remove: () => remove(i),
      initialValue: value,
    }
  });

  return children({ fields, add });
};

export default ScopeArrayField;
