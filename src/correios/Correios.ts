import ICorreiosTransport from "./ICorreiosTransport";

export default class Correios implements ICorreiosTransport{
    sendCorreios(): void {
        console.log("Correios: remessa enviada!");
    }
    receiveCorreios(): void {
        console.log("Correios: remessa recebida!");
    }

}