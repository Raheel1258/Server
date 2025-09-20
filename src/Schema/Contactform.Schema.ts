import { z } from 'zod';
import { emailValidator, commonValidators } from '../Utils/validators';

const contactSchema = z.object({
  name: commonValidators.requiredString(2),
  email: emailValidator,
  linkedInUrl: commonValidators.url(/^https$/),
  message: commonValidators.requiredString(5),
});

export default contactSchema;
