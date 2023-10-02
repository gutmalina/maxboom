import React from 'react'
import { createHashRouter } from 'react-router-dom'
import { Routes } from '../constants/routes'
import MainPage from '../pages/MainPage/MainPage'

export const router = createHashRouter([
  {
    path: Routes.HOME,
    element: <MainPage />
  }
])
