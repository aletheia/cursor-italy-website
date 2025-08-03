# React Rules

## Component Structure
- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use proper prop drilling or context as needed

## State Management
- Use React hooks (useState, useEffect, useContext)
- Keep state as local as possible
- Use proper dependency arrays in useEffect
- Avoid unnecessary re-renders

## Performance
- Use React.memo for expensive components
- Implement proper key props for lists
- Use useCallback and useMemo when appropriate
- Optimize images with Next.js Image component

## Code Organization
```typescript
// ✅ Good: Organized component structure
import React from 'react';
import { ComponentProps } from './types';
import { useCustomHook } from './hooks';

const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  const { data, loading } = useCustomHook();
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div className="container">
      {/* Component content */}
    </div>
  );
};

export default Component;
```

## Best Practices
- Use proper event handling
- Implement proper form handling
- Use proper refs when needed
- Implement proper error boundaries
- Use proper context for global state 