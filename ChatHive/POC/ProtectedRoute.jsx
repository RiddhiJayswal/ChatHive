function ProtectedRoute({ isLoggedIn, setIsLoggedIn, children }) {
    if (isLoggedIn) {
      return children; 
    } else {
      return <Navigate to="/login" />;
    }
  }
export default   ProtectedRoute