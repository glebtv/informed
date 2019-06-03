import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import FormState from '../../utils/FormState';
import Code from '../../utils/Code';

import { Form, Text, ArrayField, Scope } from '../../../src';

const initialValues = {
  name: "test",
  friends: [{
    name: "Joe",
    age: "20",
  },{
    name: "Jane",
    age: "20",
  }],
}

const DynamicArrayOfScopes = () => (
  <div>
    <Form
      initialValues={initialValues}
    >
      {({ formApi, formState }) => {
        return (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, marginRight: '2rem' }}>
              <Text field="name"/>

              <ArrayField field="friends">
                {({ add, addWithValue, fields }) => {
                  return (
                    <React.Fragment>
                      {fields.map(({key, field, remove}, index) => {
                        return (
                          <Scope key={key} scope={field}>
                            <h5>{field}</h5>
                            <Text field="name"/>
                            <Text field="age"/>
                            <button onClick={remove}>Remove</button>
                          </Scope>
                        )
                      })}

                      <button onClick={() => {
                        add()
                      }}>Add</button>

                      <button onClick={() => {
                        addWithValue({name: "test"})
                      }}>Add with preset</button>

                      <button onClick={() => {
                        formApi.setValue("friends[0].name", "Test")
                        }}>set friends[0].name to test</button>
                    </React.Fragment>
                  )

                }}
              </ArrayField>

            </div>
            <div style={{ flex: 2, minWidth: '300px' }}>
              <FormState />
            </div>
          </div>
        )
      }}

    </Form>
  </div>
);

export default withDocs(readme, DynamicArrayOfScopes);
