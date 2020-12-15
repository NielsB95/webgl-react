export interface IComponent {

    Initialize: () => void;

    Update: (ms: number) => void;

    Render: () => void;
}