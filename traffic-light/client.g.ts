namespace modules {
    //% fixedInstances
    export class TrafficLightClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_TRAFFICLIGHT, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const trafficLight = new TrafficLightClient("traffic Light");
}