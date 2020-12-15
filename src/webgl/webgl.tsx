import { useWebGL } from "./hooks/use-webgl";

export const WebGL = () => {

    const { WebGLCanvas, useStartOnReady } = useWebGL();
    useStartOnReady();

    return WebGLCanvas;
}
