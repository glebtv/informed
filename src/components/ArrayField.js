import React, { useState } from 'react';
import useFormApi from '../hooks/useFormApi';

// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const ArrayField = ({ field, children, initialValue }) => {

  const formApi = useFormApi();

  const initialValues = formApi.getInitialValue(field) || initialValue;

  // TODO throw error if initial value and its not array

  const initialKeys = initialValues ? initialValues.map(() => uuidv4()) : [];

  const [keys, setKeys] = useState(initialKeys);

  const remove = i => {
    const newKeys = keys.slice(0, i).concat(keys.slice(i + 1, keys.length));
    setKeys(newKeys);
  };

  const add = (value) => {
    if (value) {
      const prevValues = formApi.getState().values[field]
      var newValues
      if (prevValues) {
        newValues = prevValues.slice()
      } else {
        newValues = []
      }
      newValues.push(value)

      var set = {}
      set[field] = newValues
      formApi.setValues(set)
    }

    keys.push(uuidv4());
    setKeys([...keys]);
  };

  const fields = keys.map((key, i) => ({
    key,
    field: `${field}[${i}]`,
    remove: () => remove(i),
    initialValue: initialValues && initialValues[i]
  }));

  return children({ fields, add });
};

export default ArrayField;
