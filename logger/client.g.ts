namespace modules {
    //% fixedInstances
    export class LoggerClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_LOGGER, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const logger = new LoggerClient("logger");
}