namespace modules {
    //% fixedInstances
    export class SevenSegmentDisplayClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_SEVENSEGMENTDISPLAY, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const sevenSegmentDisplay = new SevenSegmentDisplayClient("seven Segment Display");
}