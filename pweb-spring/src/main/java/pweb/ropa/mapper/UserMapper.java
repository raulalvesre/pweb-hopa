package pweb.ropa.mapper;

import org.mapstruct.Mapper;
import pweb.ropa.dto.user.NewUserRequest;
import pweb.ropa.dto.user.UserResponse;
import pweb.ropa.model.User;

@Mapper(componentModel = "spring")
public abstract class UserMapper {

    public abstract User toUser(NewUserRequest newUserRequest);
    public abstract UserResponse toUserResponse(User user);

}
