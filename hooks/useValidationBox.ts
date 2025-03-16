import { useState } from "react";
import { validateUser } from "validation-box";

export function useValidation() {
  const [validationResult, setValidationResult] = useState<{ valid: boolean; errors?: string[] } | null>(null);

  const validateUsername = (username: string) => {
    const result = validateUser(username, {
      min: 3,
      max: 15,
      allowSpecialChars: "_-",
      bannedWords: ["admin", "root"],
      messages: {
        minLength: "Username must be at least 3 characters long.",
        maxLength: "Username cannot exceed 15 characters.",
        bannedWords: "This username is not allowed.",
        invalidFormat: "Username can only contain letters, numbers, '_' and '-'.",
      },
    });

    setValidationResult(result);
    return result;
  };

  return { validationResult, validateUsername };
}
