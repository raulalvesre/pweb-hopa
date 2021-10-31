package pweb.ropa.mapper;

import org.mapstruct.Mapper;
import pweb.ropa.dto.NewUserRequest;
import pweb.ropa.dto.UserResponse;
import pweb.ropa.model.User;

@Mapper(componentModel = "spring")
public abstract class UserMapper {

    public abstract User toUser(NewUserRequest newUserRequest);
    public abstract UserResponse toUserResponse(User user);

}
