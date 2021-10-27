package pweb.ropa.validation;

import javax.validation.Constraint;
import javax.validation.Payload;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Size(max = 200, message = "Email length must be less than or equal to 200")
@NotBlank(message = "Email must not be blank")
@Target(FIELD)
@Retention(RUNTIME)
@Constraint(validatedBy = EmailValidator.class)
public @interface Email {
    String message() default "Invalid email";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
