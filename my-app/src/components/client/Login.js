import React from 'react';
import { 
    Form,
    FormProvider
 } from 'react-advanced-form';
import {
    Input,
    Button
} from 'react-advanced-form-addons';
import isEmail from 'validator/lib/isEmail';

class Login extends React.Component {
    registerUser = ({ serialized }) => {
        alert(JSON.stringify(serialized, null, 2))
        
        /* Perform async request with the serialized data */
        return new Promise(resolve => resolve(
            this.props.history.push('/dashboard')
        ))
    }

    rules = {
            type: {
              email: ({ value }) => isEmail(value),
              password: {
                capitalLetter: ({ value }) => /[A-Z]/.test(value),
                oneNumber: ({ value }) => /[0-9]/.test(value),
                minLength: ({ value }) => value.length > 5,
              },
            },
          
            name: {
              confirmPassword: {
                matches: ({ get, value }) => {
                  return value === get(['userPassword', 'value'])
                },
              },
            },
        };

    messages = {
        general: {
          missing: 'Please provide the required field',
          invalid: 'Provided value is invalid',
        },
      
        type: {
          email: {
            missing: 'Please provide an e-mail',
            invalid: 'The e-mail you provided is invalid',
          },
          password: {
            rule: {
              capitalLetter: 'Include at least one capital letter',
              oneNumber: 'Include at least one number',
              minLength: 'Password must be at least 6 letters long',
            },
          },
        },
      
        name: {
          confirmPassword: {
            rule: {
              matches: 'The provided passwords do not match',
            },
          },
        },
      };
    
    render() {
        return (
            <FormProvider rules={this.rules} messages={this.messages}>
                <Form action={this.registerUser}>
                    <Input name="userEmail" type="email" label="E-mail" required />
                    <Input name="userPassword" type="password" label="Password" required />
                    <Input
                    name="confirmPassword"
                    type="password"
                    label="Confirm password"
                    required
                    skip
                    />

                    <Button primary>Register</Button>
                </Form>
            </FormProvider>
        );
    }
    
} 

export default Login;
