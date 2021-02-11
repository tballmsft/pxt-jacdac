namespace modules {
    //% fixedInstances
    export class SensorClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_SENSOR, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const sensor = new SensorClient("sensor");
}