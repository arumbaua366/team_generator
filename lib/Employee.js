// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, role, email, id) {
        this.name = name;
        this.id = id;
        this.role = role;
        this.email = email;
    }
    
    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getRole() {
        return `Employee`;
    }
    
    getEmail() {
        return this.email;
    }
}

module.exports = Employee