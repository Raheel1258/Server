import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.email({
    pattern: /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$/i,
  }),
  linkedInUrl: z.url({ protocol: /^https$/ }),
  message: z.string().min(5),
});

export default contactSchema;
