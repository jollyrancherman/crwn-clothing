import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../ulils/firebase/firebase.utils';

const SignIn = () => {
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>Sign In</h1>
      <button onClick={signInWithGoogle}>Google Sign In</button>
    </>
  );
};

export default SignIn;
