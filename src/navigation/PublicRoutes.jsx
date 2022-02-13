import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import NotFoundPage from '../screens/NotFoundPage';
import { Posts, SinglePost } from '../screens/Post';
import Profile from '../screens/Profile';

const PublicRoutes = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="post/:id" element={<SinglePost />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default PublicRoutes;
