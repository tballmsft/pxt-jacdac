namespace modules {
    //% fixedInstances
    export class AccelerometerClient extends jacdac.SensorClient<[number,number,number]> {
        constructor(role: string) {
            super(jacdac.SRV_ACCELEROMETER, role, "i6.10 i6.10 i6.10");
        }
    
        /**
        * Indicates the current forces acting on accelerometer.
        */
        //% blockId=jacdacaccelerometer101 block="%sensor forces"
        //% group="forces"
        forces(): [number,number,number] {
            // x,y,z
            const values = this.values();
            return values;
        }

            
    }

    //% fixedInstance whenUsed
    export const accelerometer = new AccelerometerClient("accelerometer");
}