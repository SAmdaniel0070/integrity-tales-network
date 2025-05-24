import { useState, useEffect, useRef } from 'react';
import { Mail, Lock, X, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockTimer, setLockTimer] = useState(0);
  const emailRef = useRef(null);
  const formRef = useRef(null);
  const navigate = useNavigate();


  // Focus email input on component load
  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  // Handle account lockout timer
  useEffect(() => {
    let interval;
    if (isLocked && lockTimer > 0) {
      interval = setInterval(() => {
        setLockTimer((prevTimer) => {
          if (prevTimer <= 1) {
            setIsLocked(false);
            clearInterval(interval);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isLocked, lockTimer]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // If account is locked, prevent login attempts
    if (isLocked) {
      return;
    }

    // Validate inputs
    if (!email.trim()) {
      setIsError(true);
      setErrorMessage('Email is required');
      emailRef.current?.focus();
      return;
    }

    if (!validateEmail(email)) {
      setIsError(true);
      setErrorMessage('Please enter a valid email address');
      emailRef.current?.focus();
      return;
    }

    if (!password) {
      setIsError(true);
      setErrorMessage('Password is required');
      return;
    }

    if (!validatePassword(password)) {
      setIsError(true);
      setErrorMessage('Password must be at least 8 characters long');
      return;
    }

    setIsLoading(true);
    setIsError(false);
    
    try {
      // Simulate API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check for admin credentials
      const isAdmin = email === 'admin@example.com' && password === 'admin123';
      const isRegularUser = email === 'kulkarniajay@hotmail.com' && password === 'password123';
      
      if (isAdmin) {
        console.log('Admin login successful');
        setLoginAttempts(0);
        navigate('/admin'); // Navigate to admin panel
      } else if (isRegularUser) {
        console.log('Login successful');
        setLoginAttempts(0);
        navigate('/home'); // Navigate to home for regular users
      } else {
        const newAttempts = loginAttempts + 1;
        setLoginAttempts(newAttempts);
      
        if (newAttempts >= 5) {
          setIsLocked(true);
          setLockTimer(30);
          setIsError(true);
          setErrorMessage('Too many failed attempts. Account locked for 30 seconds.');
        } else {
          setIsError(true);
          setErrorMessage('Invalid email or password');
        }
      }
      
    } catch (error) {
      console.error('Login error:', error);
      setIsError(true);
      setErrorMessage('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // In a real application, this would initiate Google OAuth flow
    if (isLocked) {
      return; // Prevent login if account is locked
    }
    console.log('Google login initiated');
    alert('Google Sign-In clicked! In a real app, this would open Google authentication.');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleKeyDown = (e) => {
    // Clear error on Escape key
    if (e.key === 'Escape' && isError) {
      setIsError(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4" onKeyDown={handleKeyDown}>
      <div className="w-full max-w-md rounded-lg bg-card p-8 shadow-card" role="region" aria-label="Login form">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
          <p className="mt-2 text-muted-foreground">Sign in to your account</p>
        </div>

        {isError && (
          <div className="mb-4 flex items-center rounded bg-destructive/10 p-4 text-destructive animate-fade-in" role="alert" aria-live="assertive">
            <AlertCircle className="mr-2 h-5 w-5" aria-hidden="true" />
            <div className="flex-1">{errorMessage}</div>
            <button 
              onClick={() => setIsError(false)} 
              className="ml-2"
              aria-label="Dismiss error message"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {isLocked && (
          <div className="mb-4 flex items-center rounded bg-tertiary/20 p-4 text-foreground animate-fade-in" role="alert" aria-live="polite">
            <AlertCircle className="mr-2 h-5 w-5" aria-hidden="true" />
            <div className="flex-1">
              Account temporarily locked. Try again in {lockTimer} seconds.
            </div>
          </div>
        )}

        <form ref={formRef} onSubmit={handleLogin} noValidate>
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
              Email Address
            </label>
            <div className="relative">
              {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Mail className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
              </div> */}
              <input
                id="email"
                ref={emailRef}
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded border border-input bg-background py-2 px-2 pl-12 pr-4 text-foreground focus:border-primary focus:outline-none"                placeholder="you@example.com"
                aria-required="true"
                aria-invalid={isError && (!email || !validateEmail(email))}
                disabled={isLocked || isLoading}
                autoComplete="email"
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-foreground">
                Password
              </label>
              <button 
                type="button" 
                className="text-sm font-medium text-primary hover:text-primary/80"
                onClick={() => alert('In a real app, this would open the password recovery flow')}
              >
                Forgot password?
              </button>
            </div>
            <div className="relative mt-2">
              {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
              </div> */}
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded border border-input bg-background py-2 px-2 pl-10 pr-10 text-foreground focus:border-primary focus:outline-none"
                placeholder="••••••••"
                aria-required="true"
                aria-invalid={isError && (!password || !validatePassword(password))}
                disabled={isLocked || isLoading}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-2 flex items-center pr-3"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Eye className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
            </div>
            {password && password.length > 0 && password.length < 8 && (
              <p className="mt-1 text-sm text-tertiary-foreground" role="alert">
                Password must be at least 8 characters long
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded bg-primary py-2 font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none"
              disabled={isLocked || isLoading}
              aria-busy={isLoading}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm mt-4 mb-4">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex w-full items-center justify-center rounded border border-input bg-background py-2 px-4 text-sm font-medium text-foreground shadow hover:bg-accent/10 mt-4 mb-4"
              disabled={isLocked || isLoading}
              aria-label="Sign in with Google"
            >
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{' '}
            <button 
              type="button" 
              className="font-medium text-primary hover:text-primary/80"
              onClick={() => alert('In a real app, this would navigate to the signup page')}
            >
              Sign up
            </button>
          </p>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground">
            By signing in, you agree to our{' '}
            <button 
              type="button" 
              className="text-primary hover:text-primary/80"
              onClick={() => alert('In a real app, this would open the Terms of Service')}
            >
              Terms of Service
            </button>
            {' '}and{' '}
            <button 
              type="button" 
              className="text-primary hover:text-primary/80"
              onClick={() => alert('In a real app, this would open the Privacy Policy')}
            >
              Privacy Policy
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}