namespace modules {
    //% fixedInstances
    export class MagnetoClient extends jacdac.SensorClient<[number,number,number]> {
        constructor(role: string) {
            super(jacdac.SRV_MAGNETOMER, role, "i32 i32 i32");
        }
    
        /**
        * Indicates the current magnetic field on magnetometer.
For reference: `1 mgauss` is `100 nT` (and `1 gauss` is `100 000 nT`).
        */
        //% blockId=jacdacmagnetomer101 block="%sensor forces"
        //% group="forces"
        forces(): [number,number,number] {
            // x,y,z
            const values = this.values();
            return values;
        }

            
    }

    //% fixedInstance whenUsed
    export const magneto = new MagnetoClient("magneto");
}