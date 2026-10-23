import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoute() {
  const { user, isLoading } = useSelector((state) => state.auth);
  if (isLoading) {
    return <div style={{ padding: 20 }}>Проверка авторизации...</div>;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}