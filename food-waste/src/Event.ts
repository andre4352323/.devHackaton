export default class Event{
    #restrauntID : number;
    #name : string;
    #desciption? : string;
    #startTime : Date;
    #endTime : Date;
    #quantity : number;

    constructor(restrauntID: number, name: string,  startTime: Date, endTime: Date, quantity: number,description?: string){
        this.#restrauntID = restrauntID;
        this.#name = name;
        this.#desciption = description;
        this.#quantity = quantity;
        this.#startTime = startTime;
        this.#endTime = endTime;
    }

    













}