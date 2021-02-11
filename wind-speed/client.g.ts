namespace modules {
    //% fixedInstances
    export class WindSpeedClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV_WINDSPEED, role, "u16.16");
        }
    
        /**
        * The velocity of the wind.
        */
        //% blockId=jacdacwindspeed101 block="%sensor wind speed"
        //% group="reading"
        reading(): number {
            // windSpeed
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const windSpeed = new WindSpeedClient("wind Speed");
}