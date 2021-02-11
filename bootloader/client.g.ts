namespace modules {
    //% fixedInstances
    export class BootloaderClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_BOOTLOADER, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const bootloader = new BootloaderClient("bootloader");
}