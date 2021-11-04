package pweb.ropa.validation;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@NotBlank(message = "Password must not be blank")
@Size(min = 6, max = 128, message = "Password size must be between 8 and 128")
@Pattern(regexp = "(.)*(\\d)(.)*",
         message = "Password should contain at least one digit")
@Target(FIELD)
@Retention(RUNTIME)
@Constraint(validatedBy = { })
public @interface Password {
    public String message() default "Invalid password";
    public Class<?>[] groups() default {};
    public Class<? extends Payload>[] payload() default {};
}

