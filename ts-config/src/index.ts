class User {
  // email: string;
  // password: string;
  // isValid: boolean;

  constructor(
    public email: string,
    public password: string,
    private _isValid: boolean
  ) {
    // this.email = email;
    // this.password = password;
    // this.isValid = true;
  }

  getDetails(name: string): string {
    if (this.email.includes(name)) {
      return `${name} is a subset of email ${this.email}`;
    }
    return "different";
  }

  get isValid(): boolean {
    return this._isValid;
  }

  set isValid(valid) {
    this._isValid = valid;
  }
}

const output = new User("ola@.com", "tobi", true);

console.log(output.getDetails("ola"));
