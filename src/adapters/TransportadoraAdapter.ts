import ICorreiosTransport from "../correios/ICorreiosTransport";
import Transportadora from "../transportadora/Transportadora";

export default class TransportadoraAdapter implements ICorreiosTransport {
    constructor(private transportadora: Transportadora){
        console.log("Adaptando correios p/ transportadora!");
    }
    sendCorreios(): void {
        this.transportadora.send();
    }
    receiveCorreios(): void {
        this.transportadora.receive();
    }
}