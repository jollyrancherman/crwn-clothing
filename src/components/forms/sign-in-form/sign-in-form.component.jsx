import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../../ulils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const { email, password } = defaultFormFields;
  const handleChange = () => {};

  return (
    <div>
      {' '}
      <h1>Sign In</h1>
      <form onSubmit={() => {}}>
        <FormInput
          label='Email'
          type='text'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
      </form>
    </div>
  );
};

export default SignInForm;
