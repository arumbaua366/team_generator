// TODO: Write code to define and export the Temp class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require(`./Employee`)

class Temp extends Employee {
    constructor(name, id, email) {
        super(name, id, email, agency)
        this.agency = agency;
    }

    getTempAgency() {
        return this.agency;
    }

    getRole() {
        return `Temp`;
    }
}

module.exports = Temp