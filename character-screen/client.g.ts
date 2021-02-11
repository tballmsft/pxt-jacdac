namespace modules {
    //% fixedInstances
    export class CharacterScreenClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_CHARACTERSCREEN, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const characterScreen = new CharacterScreenClient("character Screen");
}