namespace modules {
    //% fixedInstances
    export class RealTimeClockClient extends jacdac.SensorClient<[number,number,number,number,number,number,number]> {
        constructor(role: string) {
            super(jacdac.SRV_REAL_TIME_CLOCK, role, "u16 u8 u8 u8 u8 u8 u8");
        }
    
        /**
        * Current time in 24h representation. 
* ``day_of_month`` is day of the month, starting at ``1``
* ``day_of_week`` is day of the week, starting at ``1`` as monday
Default streaming period is 1 second.
        */
        //% blockId=jacdacrealtimeclock101 block="%sensor local time"
        //% group="localTime"
        localTime(): [number,number,number,number,number,number,number] {
            // year,month,dayOfMonth,dayOfWeek,hour,min,sec
            const values = this.values();
            return values;
        }

            
    }

    //% fixedInstance whenUsed
    export const realTimeClock = new RealTimeClockClient("real Time Clock");
}