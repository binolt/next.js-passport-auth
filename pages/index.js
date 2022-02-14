import React from 'react';
import Fade from "react-reveal/Fade";
import { useAuth } from '../context/AuthContext';
import GitHubIcon from '@mui/icons-material/GitHub';
import { PrimaryButton, SecondaryButton } from "../components/index";

function Landing() {
    const {currentUser, setUser, setModalOpen} = useAuth();

    const handleLogout = async() => {
      const res = await fetch("/api/logout")
      const data = await res.json()
      if(!data.msg.msgError) setUser(data.user);
    }

    return (
      <div className='app_wrapper'>
        <Fade duration={1000} top distance="20px">
        <div className='app_content'>
          {currentUser ? <h1>Welcome back, {currentUser.username} !</h1> : <h1>Next.js Authentication flow <br/> built with Passport.</h1>}
          <p>Implement a secure authentication system for Next.js built with<br/>Passport that supports custom credentials and third party logins.</p>
          <span>
            {currentUser ? (
            <PrimaryButton onClick={handleLogout}>
              Log out
            </PrimaryButton>
            ) : (
            <PrimaryButton onClick={() => setModalOpen(true)}>
              Try it !
            </PrimaryButton>
            )}
            <SecondaryButton href="https://github.com/binolt/next.js-passport-auth" target="_blank" rel="noreferrer" endIcon={<GitHubIcon/>}>
              View Repository
            </SecondaryButton>
          </span>
        </div>
        </Fade>
      </div>
    )
}

export default Landing;