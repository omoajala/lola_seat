import { Deserializable } from '../component/deserializable.model';

export class SeatModel implements Deserializable {
    class: string;
    seat: string;
    row: any;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
    
    
}