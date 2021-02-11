namespace modules {
    //% fixedInstances
    export class SystemClient extends jacdac.SensorClient<[number]> {
        constructor(role: string) {
            super(jacdac.SRV__SYSTEM, role, "i32");
        }
    
        /**
        * Read-only value of the sensor, also reported in streaming.
        */
        //% blockId=jacdac_system101 block="%sensor reading"
        //% group="reading"
        reading(): number {
            // reading
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const system = new SystemClient("system");
}