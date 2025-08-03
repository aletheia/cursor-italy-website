# TypeScript Rules

## Type Definitions
- Always define proper interfaces for props and data structures
- Use strict TypeScript configuration
- Prefer interfaces over types for object shapes
- Export types from dedicated type files

## Component Patterns
```typescript
// ✅ Good: Proper interface definition
interface ComponentProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

// ✅ Good: Proper component typing
const Component: React.FC<ComponentProps> = ({ title, description, children }) => {
  return <div>{children}</div>;
};
```

## Error Handling
- Use proper error boundaries
- Handle async operations with try-catch
- Provide meaningful error messages
- Use TypeScript's strict null checks

## Type Safety
- Use strict mode in tsconfig.json
- Avoid `any` type - use proper typing
- Use union types for multiple possible values
- Use generics for reusable components
- Use proper type guards for runtime checks

## Best Practices
- Use readonly for immutable data
- Use const assertions for literal types
- Use proper utility types (Partial, Pick, Omit)
- Use proper generic constraints
- Use proper type inference 