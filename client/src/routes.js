import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import SignUp from "./components/signup/SignUp";
import React from 'react'
import CreateQuote from './components/CreateQuote';
import OtherUserProfile from "./components/OtherUserProfile";


export const routes = [
    { path: "/", element: <Home /> },
    {path:"/create",element:<CreateQuote />},
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/profile", element: <Profile /> },
    { path: "/profile/:userId", element: <OtherUserProfile /> },

   
]