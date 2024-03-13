"use client";

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Message_data = createContext(null);

function Context({ children }) {
  const [theme, setTheme] = useState("light");
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [userAuthToken, setUserAuthToken] = useState('');
  const router = useRouter();

  useEffect(() => {
    getTheme();
  }, []);

  function getTheme() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme:dark)").matches
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }


  useEffect(() => {
      let userToken = localStorage.getItem('p_u_t');
      if (!!userToken) {
          setUserAuthToken(userToken);}
  }, [])
  const config = {
    headers: {
      'Authorization': `Bearer ${userAuthToken}`
    }
  };
  useEffect(() => {
      if (userAuthToken !== '') {
        setIsPageLoaded(true);
          axios.get('http://localhost:3000/api/getUserDetails', config).then(result => {
               setIsPageLoaded(false);
              setUserInfo(result.data['user']);
              localStorage.setItem('userInfo', JSON.stringify(result.data['user']))
          }).catch(err => {
              console.log('Error: ', err);
               setIsPageLoaded(false);
              if (err.response.status == 401) {
                  console.log("errrr");
                  logout();
              } else {
                  console.log("firsterrr");
                  logout();
              }

          })
      } else {
          setUserInfo({})
      }
  }, [userAuthToken])

  function setUserToken(token) {
      setUserAuthToken(token);
      localStorage.setItem('p_u_t', token);
  }

  function logout() {
    router.push('/admin-login/');
    setUserAuthToken('');
    setUserInfo({})
    localStorage.removeItem('p_u_t');
  }
  return (
    <Message_data.Provider
      value={{ theme, setTheme, setSelectedLanguage, selectedLanguage, setIsPageLoaded,
        isPageLoaded,  userInfo,
        userAuthToken,
        setUserToken,}}
    >
      {children}
    </Message_data.Provider>
  );
}
export default Context;
