// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, role, email, id) {
        this.name;
        this.id;
        this.email;
    }
    
    getName() {
        return this.name;
    }

    getRole() {
        return `Employee`;
    }
    
    getEmail() {
        return this.email;
    }

    getID() {
        return this.id;
    }
}

module.exports = Employee