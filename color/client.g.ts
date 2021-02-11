namespace modules {
    //% fixedInstances
    export class ColorClient extends jacdac.SensorClient<[number,number,number]> {
        constructor(role: string) {
            super(jacdac.SRV_COLOR, role, "u0.16 u0.16 u0.16");
        }
    
        /**
        * Detected color in the RGB color space.
        */
        //% blockId=jacdaccolor101 block="%sensor color"
        //% group="reading"
        reading(): [number,number,number] {
            // red,green,blue
            const values = this.values();
            return values;
        }

            
    }

    //% fixedInstance whenUsed
    export const color = new ColorClient("color");
}