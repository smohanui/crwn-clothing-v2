import { signInPopUp, createUserDoc } from "../../Utils/FIrebase/FIrebase.util";

const SignInComponent = () => {
  const signIP = async () => {
    let response = await signInPopUp();
    console.log(response);
    const userDocRef = await createUserDoc(response.user);
    console.log(userDocRef);
  };

  return (
    <div>
      <p>This is Sign-In page.</p>
      <button onClick={signIP}>Sign-In-Google-With-Pop</button>
    </div>
  );
};

export default SignInComponent;
