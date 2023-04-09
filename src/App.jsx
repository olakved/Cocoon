import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutWrapper from "./utils/WebWrapper";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/Login";
import Accounts from "./pages/accounts";
import Analytics from "./pages/analytics";
import Files from "./pages/files";
import Schedule from "./pages/schedule";
import Search from "./pages/search";
import Settings from "./pages/settings";
import AppLayout from "./layout";
import UserDashboard from "./pages/Dashboard";
import UsersPage from "./pages/users";
import SignupPage from "./pages/signup";
import ErrorPage from "./pages/error";
import ProductDetails from "./pages/productDetails";
import HeaderN from "./components/headerN";
import BlogPage from "./pages/blog";
import PageWrap from "./components/common/PageWrap";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutWrapper>
              <BlogPage />
            </LayoutWrapper>
          }
        />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />

        {/* App Routes */}
        <Route path="profile" element={<AppLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="files" element={<Files />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="search" element={<Search />}></Route>
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="search/:id" element={<ProductDetails />} />
        <Route path="logout" element={<LoginPage />} />
      </Routes>
      {/* </LayoutWrapper> */}
    </>
  );
}

export default App;
