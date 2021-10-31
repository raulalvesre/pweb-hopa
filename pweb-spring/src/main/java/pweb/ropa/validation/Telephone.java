package pweb.ropa.validation;

import javax.validation.constraints.NotBlank;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@NotBlank(message = "Telephone must not be blank")
@Target(FIELD)
@Retention(RUNTIME)
public @interface Telephone { }
