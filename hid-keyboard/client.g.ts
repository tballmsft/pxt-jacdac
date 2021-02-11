namespace modules {
    //% fixedInstances
    export class HidKeyboardClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_HIDKEYBOARD, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const hidKeyboard = new HidKeyboardClient("hid Keyboard");
}