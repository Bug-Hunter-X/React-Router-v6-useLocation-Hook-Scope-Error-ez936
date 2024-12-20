To resolve this, ensure `useLocation` is called within a component's functional scope.  If you need the location data outside of a component, you can pass it down as a prop or use a context API.  Example using context:

```javascript
import React, { createContext, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

const LocationContext = createContext();

function LocationProvider({ children }) {
  const location = useLocation();
  const [locationState, setLocationState] = useState(location);

  return (
    <LocationContext.Provider value={{ locationState, setLocationState }}>
      {children}
    </LocationContext.Provider>
  );
}

function MyComponent() {
  const { locationState } = useContext(LocationContext);
  // Use locationState here
  return <div>{locationState.pathname}</div>;
}
```