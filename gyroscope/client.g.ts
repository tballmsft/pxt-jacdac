namespace modules {
    //% fixedInstances
    export class GyroscopeClient extends jacdac.SensorClient<[number,number,number]> {
        constructor(role: string) {
            super(jacdac.SRV_GYROSCOPE, role, "i16.16 i16.16 i16.16");
        }
    
        /**
        * Indicates the current forces acting on accelerometer.
        */
        //% blockId=jacdacgyroscope101 block="%sensor rotation rates"
        //% group="rotationRates"
        rotationRates(): [number,number,number] {
            // x,y,z
            const values = this.values();
            return values;
        }

            
    }

    //% fixedInstance whenUsed
    export const gyroscope = new GyroscopeClient("gyroscope");
}