// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require(`./Employee`)

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email, school)
        this.school = school;
    }

    getUniversity() {
        return this.school;
    }

    getRole() {
        return `Intern`;
    }
}

module.exports = Intern