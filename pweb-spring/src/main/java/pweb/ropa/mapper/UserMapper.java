package pweb.ropa.mapper;

import org.mapstruct.Mapper;
import pweb.ropa.dto.RegisterUserRequest;
import pweb.ropa.dto.UserResponse;
import pweb.ropa.model.User;

@Mapper(componentModel = "spring")
public abstract class UserMapper {

    public abstract User toUser(RegisterUserRequest registerUserRequest);
    public abstract UserResponse toUserResponse(User user);

}
