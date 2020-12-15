export class Vector3 {
    X: number;
    Y: number;
    Z: number;

    constructor(x?: number, y?: number, z?: number) {
        this.X = x || 0;
        this.Y = y || 0;
        this.Z = z || 0;
    }

    Add = (other: Vector3) => {
        if (other === undefined)
            return;

        this.X += other.X;
        this.Y += other.Y;
        this.Z += other.Z;
    }

    Subtract = (other: Vector3) => {
        if (other === undefined)
            return;

        this.X -= other.X;
        this.Y -= other.Y;
        this.Z -= other.Z;
    }
}