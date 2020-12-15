import { useCallback, useEffect, useState } from "react";

export const useWebGL = () => {
    const [canvas, setCanvas] = useState<HTMLCanvasElement>();
    const ref = useCallback((node: HTMLCanvasElement) => {
        setCanvas(node);
    }, [])
    const gl = canvas?.getContext('webgl')!;
    const ready = (gl !== undefined);
    const start: () => void = () => _start(gl);

    return {
        start,
        useStartOnReady: () => _useStartOnReady(ready, start),
        WebGLCanvas: (
            <canvas
                ref={ref}
                width="400px"
                height="400px"
            />
        )
    };
};

const _start = (gl: WebGLRenderingContext) => {
    window.requestAnimationFrame(() => _cycle(gl));
};

const _useStartOnReady = (ready: boolean, start: () => void) => {
    useEffect(() => {
        if (ready) start();
    }, [ready, start])
}

const _cycle = (gl: WebGLRenderingContext) => {

    gl.clearColor(0, 0, 1, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    window.requestAnimationFrame(() => _cycle(gl));
}