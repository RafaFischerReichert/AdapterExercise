import ITransportadoraTransport from "./ITransportadoraTransport";

export default class Transportadora implements ITransportadoraTransport{
    send(): void {
        console.log("Transportadora: remessa enviada!");
    }
    receive(): void {
        console.log("Transportadora: remessa recebida!");
    }

}