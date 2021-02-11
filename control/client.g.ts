namespace modules {
    //% fixedInstances
    export class ControlClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_CONTROL, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const control = new ControlClient("control");
}