package pweb.ropa.mapper;

import org.mapstruct.Mapper;

import org.mapstruct.Mapping;
import pweb.ropa.dto.cart.CartItemResponse;
import pweb.ropa.model.CartItem;

@Mapper(componentModel = "spring")
public abstract class CartItemMapper {

    @Mapping(target = "productId", source = "id.product.id")
    public abstract CartItemResponse toCartItemResponse(CartItem cartItem);

}
