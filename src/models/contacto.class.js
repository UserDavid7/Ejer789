
export class Contacto{
    name="";
    lastName="";
    number = 0;
    conect = false;
    img = "https://cevac.sstabasco.gob.mx/static/img/user3.png";

    constructor(name, lastName , number, conect , img){
        this.name = name;
        this.lastName = lastName;
        this.number = number;
        this.conect = conect
        this.img = img
    }
}