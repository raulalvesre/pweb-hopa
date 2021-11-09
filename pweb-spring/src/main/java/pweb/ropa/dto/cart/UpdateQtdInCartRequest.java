package pweb.ropa.dto.cart;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
public class UpdateQtdInCartRequest {

    @NotNull
    @JsonProperty
    private Long productId;

    @NotNull
    @Min(value = 0, message = "Quantity value must be positive")
    @JsonProperty
    private Integer newQtd;

}
