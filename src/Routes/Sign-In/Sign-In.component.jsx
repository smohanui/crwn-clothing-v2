import { useEffect } from "react";
import {
  signInPopUp,
  createUserDoc,
  gSignInredir,
  auth,
} from "../../Utils/FIrebase/FIrebase.util";
import { getRedirectResult } from "firebase/auth";

const SignInComponent = () => {
  const signIP = async () => {
    let response = await signInPopUp();
    console.log(response);
    const userDocRef = await createUserDoc(response.user);
    console.log(userDocRef);
  };
  useEffect(async () => {
    // const res = await getAuthRedirResult();
    //It give the redirect type authentication result of the session
    const res = await getRedirectResult(auth);
    // console.log(res);
    if (res) {
      const userDocRef = await createUserDoc(res.user);
    }
  }, []);

  return (
    <div>
      <p>This is Sign-In page.</p>
      <button onClick={signIP}>Sign-In-Google-With-Pop</button>
      <button onClick={gSignInredir}>Sign-In-Google-With-Redirect</button>
    </div>
  );
};

export default SignInComponent;
