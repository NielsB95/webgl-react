import { TransformComponent } from "../components/transform-component";
import { Entity } from "../entity";

class BaseEntityFactory {

    Create = (): Entity => {

        var entity = new Entity();
        entity.AddComponent(new TransformComponent());

        return entity;
    }
}

export default new BaseEntityFactory();