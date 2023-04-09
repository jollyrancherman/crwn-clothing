import SignInForm from '../../components/forms/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/forms/sign-up-form/sign-up-form.component';

const Authorization = () => {
  return (
    <>
      <div className='flex'>
        <div className=' w-1/2'>
          <h2>Don't have an account?</h2>
          <p>Sign up with your email and Password</p>
          <SignUpForm />
        </div>
        <div className=' w-1/2'>
          <SignInForm />
        </div>
      </div>
    </>
  );
};

export default Authorization;
