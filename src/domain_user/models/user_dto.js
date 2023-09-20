class UserDTO {
  id;
  name;
  email;

  constructor(data) {
    this.id = data._id
    this.name = data.name;
    this.email = data.email;
  }

}

export default UserDTO;
