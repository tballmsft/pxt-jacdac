namespace modules {
    //% fixedInstances
    export class BaseClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV__BASE, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const base = new BaseClient("base");
}