export class login {
    public usuario: string;
    public password: string;

    constructor(usuario: string, password: string, ) {
        this.usuario = usuario;
        this.password = password;
    }

}

export class User {
    public id: number;
    public nombre: string;
    public email: string;
    public address: string;
    public phone: number;
    public funcion: string;
    public phtotoURL: string;


    constructor(id: number, nombre: string, email: string, address: string, phone: number, funcion: string, phtotoURL: string) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.funcion = funcion;
        this.phtotoURL = phtotoURL;
    }
}
