namespace modules {
    //% fixedInstances
    export class SpeechSynthesisClient extends jacdac.Client {
        constructor(role: string) {
            super(jacdac.SRV_SPEECHSYNTHESIS, role);
        }
    
            
    }

    //% fixedInstance whenUsed
    export const speechSynthesis = new SpeechSynthesisClient("speech Synthesis");
}