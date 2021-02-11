namespace modules {
    //% fixedInstances
    export class UVIndexClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_UVINDEX, role, "u16.16");
        }
    
        /**
        * Ultraviolet index, typically refreshed every second.
        */
        //% blockId=jacdacuvindex101 block="%sensor uv index"
        //% group="uvIndex"
        uvIndex(): number {
            // uvIndex
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const UVIndex = new UVIndexClient("UVIndex");
}