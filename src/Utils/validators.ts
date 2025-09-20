import { z } from 'zod';

// Shared email validation pattern
export const emailPattern = /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$/i;

// Reusable email validator
export const emailValidator = z.email({
  pattern: emailPattern,
});

// Common validation schemas
export const commonValidators = {
  email: emailValidator,
  requiredString: (minLength: number = 1) => z.string().min(minLength),
  url: (protocol?: RegExp) => z.url({ protocol }),
};
