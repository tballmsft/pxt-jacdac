namespace modules {
    //% fixedInstances
    export class MIDIOutputClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_MIDIOUTPUT, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const mIDIOutput = new MIDIOutputClient("m IDIOutput");
}