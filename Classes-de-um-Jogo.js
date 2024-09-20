class heroi {
    constructor(nomeHeroi, idadeHeroi, tipoHeroi){
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi
    }
    
    atacar(){
        let ataque
        switch (this.tipoHeroi){
            case "mago":
                ataque = "magia"
                break
            case "guerreiro":
                ataque = "espada"
                break
            case "monge":
                ataque = "artes marciais"
                break
            case "ninja":
                ataque = "shuriken"
                break
        }
        console.log(`O ${this.tipoHeroi} atacou usando ${ataque}`)
    }
    
}

let mago= new heroi("Madoka", 14, "mago")
let guerreiro = new heroi("Yusuke", 14, "guerreiro")
let monge = new heroi("Miroku", 2000, "monge")
let ninja = new heroi("Rock Lee", 15, "ninja")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()