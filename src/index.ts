import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import Correios from "./correios/Correios";
import ICorreiosTransport from "./correios/ICorreiosTransport";
import Transportadora from "./transportadora/Transportadora";

let transporte : ICorreiosTransport = new Correios();
transporte.sendCorreios();
transporte.receiveCorreios();
transporte = new TransportadoraAdapter(new Transportadora());
transporte.sendCorreios();
transporte.receiveCorreios();