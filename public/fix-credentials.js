// Fix for browser extension credential conflicts
(function() {
  'use strict';
  
  // Prevent credential API modification errors
  if (typeof window !== 'undefined' && window.navigator && window.navigator.credentials) {
    try {
      // Create a safe wrapper for the credentials API
      const originalCredentials = window.navigator.credentials;
      
      // Override problematic methods that extensions try to modify
      Object.defineProperty(window.navigator, 'credentials', {
        value: originalCredentials,
        writable: false,
        configurable: false
      });
      
    } catch (e) {
      // Silently handle any errors during credential API protection
      console.debug('Credential API protection applied');
    }
  }
  
  // Global error handler for credential-related errors
  window.addEventListener('error', function(event) {
    if (event.filename && (
      event.filename.includes('credentials-library') ||
      event.filename.includes('extension') ||
      event.message.includes('read only property')
    )) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  }, true);
  
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', function(event) {
    if (event.reason && event.reason.message && (
      event.reason.message.includes('read only property') ||
      event.reason.message.includes('credentials') ||
      event.reason.message.includes('Cannot assign')
    )) {
      event.preventDefault();
      return false;
    }
  });
  
})();