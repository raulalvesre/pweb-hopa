package pweb.ropa.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pweb.ropa.dto.user.NewUserRequest;
import pweb.ropa.dto.user.UserResponse;
import pweb.ropa.service.UserService;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping("/users")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/{id}")
    ResponseEntity<UserResponse> userById(@PathVariable("id") Long id) throws Exception {
        var response = this.userService.getById(id);
        return ResponseEntity.ok(response);
    }

    @PostMapping
    ResponseEntity<UserResponse> createUser(@RequestBody @Valid NewUserRequest newUserRequest) throws Exception {
        var response = this.userService.createUser(newUserRequest);
        return ResponseEntity.created(URI.create("/users/" + response.getId())).body(response);
    }

    @DeleteMapping("/{id}")
    ResponseEntity<Void> deleteUser(@PathVariable("id") Long id) throws Exception {
        this.userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/is-email-registered")
    ResponseEntity<Boolean> isEmailAlreadyRegistered(String email) throws Exception {
        return ResponseEntity.ok(userService.isEmailAlreadyRegistered(email));
    }

    @GetMapping("/is-cpf-registered")
    ResponseEntity<Boolean> isCpfAlreadyRegistered(String cpf) throws Exception {
        return ResponseEntity.ok(userService.isCpfAlreadyRegistered(cpf));
    }

    @GetMapping("/is-telephone-registered")
    ResponseEntity<Boolean> isTelephoneAlreadyRegistered(String telephone) throws Exception {
        return ResponseEntity.ok(userService.isTelephoneAlreadyRegistered(telephone));
    }

}
