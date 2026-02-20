export default class Restraunt{
    #restrauntID: number;
    #email: string;
    #password: string;
    #location: string;
    #contact: number;

    constructor(restrauntID: number, email: string, password: string, location: string, contact: number){
        this.#restrauntID = restrauntID;
        this.#email = email;
        this.#password = password;
        this.#location = location;
        this.#contact = contact;
    }

    compareUser(otherEmail: string): boolean{
        return this.#email === otherEmail;
    }

    comparePassword(otherPassword: string): boolean{
        return this.#password === otherPassword;
    }



}
