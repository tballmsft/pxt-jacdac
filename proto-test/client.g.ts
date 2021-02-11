namespace modules {
    //% fixedInstances
    export class ProtoTestClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_PROTOTEST, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const protoTest = new ProtoTestClient("proto Test");
}