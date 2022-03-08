import { useEffect, useState } from 'react';

export const useValidate = (form) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (Object.values(form).every((value) => !!value.length)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [form]);

  return isValid;
};
