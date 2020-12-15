import { IComponent } from "./components/component";

export class Entity {
    Components: IComponent[];

    constructor() {
        this.Components = [];
    }

    Init = () => {
        this.Components.forEach(x => x.Initialize());
    }

    Update = (ms: number) => {
        this.Components.forEach(x => x.Update(ms));
    }

    Render = () => {
        this.Components.forEach(x => x.Render());
    }

    AddComponent = (component: IComponent) => {
        this.Components.push(component);
    }
}