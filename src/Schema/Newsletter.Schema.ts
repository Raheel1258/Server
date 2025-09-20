import { z } from 'zod';
import { emailValidator } from '../Utils/validators';

const newsletterSchema = z.object({
  email: emailValidator,
});

export default newsletterSchema;
