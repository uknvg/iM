import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './SideBar';

const Dashboard = () => {  

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const clientID = '1353686904356474991';
  const clientSecret = '2E2ORZlk3ya1mr6a14OtuOddRjh2nOWb'; 
  const redirectURI = 'https://uknvg.github.io/iM/#/dashboard'; 

  useEffect(() => {
    const fetchUserData = async (code) => {
      try {
        const tokenResponse = await axios.post(
          'https://discord.com/api/oauth2/token',
          new URLSearchParams({
            client_id: clientID,
            client_secret: clientSecret,
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: redirectURI,
          }),
          {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          }
        );

        const { access_token } = tokenResponse.data;

        const userResponse = await axios.get('https://discord.com/api/v10/users/@me', {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });

        const userData = userResponse.data;
        console.log(userData);

        // حفظ بيانات المستخدم في localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (!users.find(u => u.id === userData.id)) {
          users.push(userData);
          localStorage.setItem('users', JSON.stringify(users));
        }

        localStorage.setItem('currentUserID', userData.id);
        setUser(userData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setIsLoading(false);
      }
    };

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUserID = localStorage.getItem('currentUserID');

    if (currentUserID) {
      const currentUser = users.find(user => user.id === currentUserID);
      if (currentUser) {
        setUser(currentUser);
        setIsLoading(false);
        return;
      }
    }

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      fetchUserData(code);
    } else {
      const discordLoginUrl = `https://discord.com/oauth2/authorize?client_id=${clientID}&redirect_uri=${encodeURIComponent(redirectURI)}&response_type=code&scope=identify`;
      window.location.href = discordLoginUrl;
    }
  }, [navigate]);

  console.log("myUser", user);

  return (
    <div className="dashboard">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : user ? (
        <Sidebar user={user} language="en" />
      ) : (
        <h1>خطأ في تحميل البيانات!</h1>
      )}
    </div>
  );
};

export default Dashboard;
