namespace modules {
    //% fixedInstances
    export class ArcadeGamepadClient extends jacdac.SensorClient<[([ArcadeGamepadButton, number])[]]> {
        constructor(role: string) {
            super(jacdac.SRV_ARCADE_GAMEPAD, role, "r: u8 u0.8");
        }
    
        /**
        * Indicates which buttons are currently active (pressed).
`pressure` should be `0xff` for digital buttons, and proportional for analog ones.
        */
        //% blockId=jacdacarcadegamepad101 block="%sensor buttons"
        //% group="buttons"
        buttons(): ([ArcadeGamepadButton, number])[] {
            // rest
            const values = this.values();
            return values && values[0];
        }

            
    }

    //% fixedInstance whenUsed
    export const arcadeGamepad = new ArcadeGamepadClient("arcade Gamepad");
}