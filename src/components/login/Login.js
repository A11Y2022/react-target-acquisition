import React, { useState } from "react";
import { useGoogleLogin, useGoogleLogout } from "react-google-login";
import { BsFillPersonFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { Button } from "react-bootstrap";

export default function Login() {
  // Client ID
  const clientId =
    "917074954096-o8ganf0fgn90h838cc6lblfuf3r17l6q.apps.googleusercontent.com";

  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  // if the login is successful, then the logout button will show, Login button will not show
  const onSuccess = (res) => {
    console.log("Login Successful. Access Token:", res.accessToken);
    setShowLoginButton(false);
    setShowLogoutButton(true);
  };

  //Login and Logout onFailure
  const onFailure = (res) => {
    console.log("Login Failed: ", res);
  };

  // if the logout is successful, then the Login button will show. Logout button will not show
  const onLogoutSuccess = () => {
    console.log("Logout Successful");
    setShowLoginButton(true);
    setShowLogoutButton(false);
  };

  // Sign in function, is called when clicked on the icon
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    cookiePolicy: "single_host_origin",
  });

  // Sign out function, is called when clicked on the
  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <div>
      {showLoginButton ? (
        <Button variant="outline-dark" size="lg" onClick={signIn}>
          <BsFillPersonFill />
        </Button>
      ) : null}

      {showLogoutButton ? (
        <Button variant="outline-dark" size="lg" onClick={signOut}>
          <BiLogOut />
        </Button>
      ) : null}
    </div>
  );
}
