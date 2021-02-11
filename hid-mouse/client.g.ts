namespace modules {
    //% fixedInstances
    export class HidMouseClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_HIDMOUSE, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const hidMouse = new HidMouseClient("hid Mouse");
}