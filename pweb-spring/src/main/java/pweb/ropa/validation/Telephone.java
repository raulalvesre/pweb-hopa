package pweb.ropa.validation;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;
import javax.validation.constraints.NotBlank;

@NotBlank(message = "Telephone must not be blank")
@Target(FIELD)
@Retention(RUNTIME)
@Constraint(validatedBy = { })
public @interface Telephone { 
    public String message() default "Invalid telephone";
    public Class<?>[] groups() default {};
    public Class<? extends Payload>[] payload() default {};
}
