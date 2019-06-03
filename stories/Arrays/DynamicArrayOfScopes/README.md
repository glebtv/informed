# Dynamic Array of Scopes

Sometimes you need to render an array of scopes

<!-- STORY -->

```jsx
import { Form, Text, ArrayField, Scope } from 'informed';

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
          <div>
            <Text field="name"/>

            <ArrayField field="friends">
              {({ add, fields }) => {
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
                      add({name: "test"})
                    }}>Add with preset</button>

                    <button onClick={() => {
                      formApi.setValue("friends[0].name", "Test")
                      }}>set friends[0].name to test</button>
                  </React.Fragment>
                )

              }}
            </ArrayField>
          </div>
        )
      }}
    </Form>
  </div>
);
```
