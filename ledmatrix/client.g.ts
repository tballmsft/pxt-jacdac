namespace modules {
    //% fixedInstances
    export class LEDMatrixClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_LEDMATRIX, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const LEDMatrix = new LEDMatrixClient("LEDMatrix");
}