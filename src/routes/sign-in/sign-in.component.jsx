import SignUpForm from '../../components/forms/sign-up-form.component';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../ulils/firebase/firebase.utils';

const SignIn = () => {
  const logInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log({ userDocRef });
  };

  return (
    <>
      <div className='flex'>
        <div className=' w-1/2'>
          <SignUpForm />
        </div>
        <div>
          <h1>Sign In</h1>
          <button onClick={logInWithGoogle}>Google Sign In</button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
