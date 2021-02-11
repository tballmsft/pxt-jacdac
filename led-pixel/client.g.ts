namespace modules {
    //% fixedInstances
    export class LedPixelClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_LEDPIXEL, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const ledPixel = new LedPixelClient("led Pixel");
}