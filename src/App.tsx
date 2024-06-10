import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { LoginPage } from './pages/LoginPage'
import { SignupPage } from './pages/SignupPage'
import { ExpensesPage } from './pages/ExpensesPage'
import { ChartPage } from './pages/ChartPage'
import ProtectedRoute from './cmps/ProtectedRoute'
import { EditPage } from './pages/EditPage'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route
              path="expenses"
              element={
                <ProtectedRoute>
                  <ExpensesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="chart"
              element={
                <ProtectedRoute>
                  <ChartPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="edit/:expenseId?"
              element={
                <ProtectedRoute>
                  <EditPage />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
