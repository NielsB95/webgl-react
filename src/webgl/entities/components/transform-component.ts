import { Vector3 } from "../../types";
import { IComponent } from "./component";

export class TransformComponent implements IComponent {

    Position: Vector3;
    Velocity: Vector3;
    Accelation: Vector3;

    constructor() {
        this.Position = new Vector3();
        this.Velocity = new Vector3();
        this.Accelation = new Vector3();
    }

    Initialize = () => {

    };

    Update = (ms: number) => {
        this.Velocity.Add(this.Accelation);
        this.Position.Add(this.Velocity);

    };

    Render = () => { };
}