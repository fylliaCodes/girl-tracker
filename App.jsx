import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FinanceProvider } from "./assets/Context/FinanceContext";
import NavBar from "./assets/Context/NavBar";
import Dashboard from "./Components/Dashboard";
import Categories from "./Components/Categories";
import ExpenseForm from "./Components/ExpenseForm";
import AllExpenses from "./Components/AllExpenses";
import ExpensesList from "./Components/ExpensesList";
import BankaSavings from "./Components/BankaSavings";
import PiggieGoals from "./Components/PiggieGoals";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import UserProfile from "./Components/UserProfile";
import EditProfile from "./Components/EditProfile";
import "./assets/CSS/App.css";
import ForgotPassword from "./Components/ForgotPassword";
import GoalsDetails from "./Components/GoalDetails";
import MonthlyChart from "./Components/MonthlyChart";
import AvatarCreator from "./Components/AvatarCreator";
import DataPerMonth from "./Components/DataPerMonth";
import useMonthlyCycle from "./hooks/useMonthlyCycle";

function App() {
  return (
    <FinanceProvider>
        <NavBar />
        <Routes>
          {/* Root path loads Dashboard automatically */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* User Profile */}
          <Route path="/userprofile" element={<UserProfile />} />

          {/* Edit Profile */}
          <Route path="/edit-profile" element={<EditProfile />} />

          {/* Sign Up */}
          <Route path="/signup" element={<SignUp />} />

          {/* Login */}
          <Route path="/login" element={<Login />} />

           {/* Logout */}
          <Route path="/logout" element={<Logout />} />

          {/* Forgot Password */}
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Banka */}
          <Route path="/banka-savings" element={<BankaSavings />} />

          {/* Categories of Expenses */}
          <Route path="/categories" element={<Categories />} />

          {/* Expense Form */}
         <Route path="/expense/:category" element={<ExpenseForm />} />

           {/* All Expenses*/}
          <Route path="/allexpenses" element={<AllExpenses />} />

          {/* List of Expenses page */}
          <Route path="/expenses-list" element={<ExpensesList />} />

          {/* Monthly Expenses Chart */}
         <Route path="/monthly-chart" element={<MonthlyChart />} />

         {/*Financial Data For Each Month*/}
         <Route path="/data-per-month" element={<DataPerMonth />} />

          {/* Piggie Goals */}
          <Route path="/piggie-goals" element={<PiggieGoals />} />

           {/* Goals Details */}
          <Route path="/goal-details" element={<GoalsDetails />} /> 

          {/* Create Avatar */}
          <Route path="/avatar-creator" element={<AvatarCreator />} /> 

        </Routes>
    </FinanceProvider>
  );
}

export default App;
