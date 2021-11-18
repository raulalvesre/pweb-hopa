package pweb.ropa.mapper;

import org.mapstruct.Mapper;

import org.mapstruct.Mapping;
import pweb.ropa.dto.cart.CartItemResponse;
import pweb.ropa.model.CartItem;

@Mapper(componentModel = "spring", uses = ProductMapper.class)
public abstract class CartItemMapper {

    @Mapping(target = "product", source = "id.product")
    public abstract CartItemResponse toCartItemResponse(CartItem cartItem);

}
