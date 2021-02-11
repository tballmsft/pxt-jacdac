namespace modules {
    //% fixedInstances
    export class JoystickClient extends jacdac.SensorClient<[number,number]> {
        constructor(role: string) {
            super(jacdac.SRV_JOYSTICK, role, "i1.15 i1.15");
        }
    
        /**
        * The direction of the joystick measure in two direction.
If joystick is digital, then each direction will read as either `-0x8000`, `0x0`, or `0x7fff`.
        */
        //% blockId=jacdacjoystick101 block="%sensor direction"
        //% group="direction"
        direction(): [number,number] {
            // x,y
            const values = this.values();
            return values;
        }

            
    }

    //% fixedInstance whenUsed
    export const joystick = new JoystickClient("joystick");
}