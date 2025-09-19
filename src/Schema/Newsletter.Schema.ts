import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.email({
    pattern: /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$/i,
  }),
});

export default newsletterSchema;
