namespace jacdac {
    const INTERNAL_KEY_UP = 2050;
    const INTERNAL_KEY_DOWN = 2051;

    //% fixedInstances
    export class ButtonClient extends SensorClient {
        constructor(requiredDevice: string = null) {
            super("btn", jd_class.BUTTON, requiredDevice);
        }

        connectControllerButton(controllerButton: number) {
            this.start()
            control.internalOnEvent(this.eventId, JDButtonEvent.Down,
                () => control.raiseEvent(INTERNAL_KEY_DOWN, controllerButton))
            control.internalOnEvent(this.eventId, JDButtonEvent.Up,
                () => control.raiseEvent(INTERNAL_KEY_UP, controllerButton))
        }

        /**
         * Reads the current x value from the sensor
         */
        //% blockId=jacadacbtispressed block="jacdac %button is pressed"
        //% group="Buttons"
        isPressed(): boolean {
            const s = this.state;
            if (!s || s.length < 1) return false;
            return !!s.getNumber(NumberFormat.UInt8LE, 0);
        }

        handleCustomCommand(pkt: JDPacket) {
            const size = pkt.size;

            // buttons may pack one or more events into a packet.
            switch (pkt.service_command) {
                case CMD_EVENT: {
                    let i = 0;
                    while (i < size) {
                        const eid = pkt.data.getNumber(NumberFormat.UInt16LE, i)
                        control.raiseEvent(this.eventId, eid);
                        i += 2
                    }
                    break
                }
                default:
                    break
            }
        }

        /**
         * Runs code when an event happens on the sensor
         * @param gesture
         * @param handler
         */
        //% blockId=jacadacbtnonevent block="jacdac %button on %event"
        //% group="Buttons"
        onEvent(event: JDButtonEvent, handler: () => void) {
            this.registerEvent(event, handler);
        }
    }

    //% fixedInstance whenUsed block="button client"
    export const buttonClient = new ButtonClient();

}