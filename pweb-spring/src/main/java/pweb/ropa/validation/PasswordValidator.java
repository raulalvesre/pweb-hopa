package pweb.ropa.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.regex.Pattern;

public class PasswordValidator implements ConstraintValidator<Password, String> {
    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null) {
            return true;
        }

        Pattern pattern = Pattern.compile("(.)*(\\d)(.)*");
        return pattern.matcher(value).matches();
    }
}
