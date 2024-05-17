export default class Pokemon{
    //private adattagok
    #nev=""
    #kep=""
    #mondat=""
    

    constructor(nev,kep,mondat,szuloElem){
        //ez hívodik meg példányosításkor, beállítja az adattagokat
        this.#nev=nev
        this.#kep=kep
        this.#mondat=mondat
        this.szuloElem=szuloElem
        this.#megjelenit()
    }

    beszel(){
        console.log(this.#mondat)
    }

    get nev(){
        return this.#nev
    }

    set mondat(szoveg){
        this.#mondat=szoveg
    }

    #htmlOsszeallit(){
        let txt=`
        <div class="poki">
        <h3>${this.#nev}</h3>
        <img src="${this.#kep}" alt"${this.#nev} pokemon" >
        </div>
        `
        return txt
    }

    #megjelenit(){
        this.szuloElem.append(this.#htmlOsszeallit())

    }

}