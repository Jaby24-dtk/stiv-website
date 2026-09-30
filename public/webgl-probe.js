// Reports whether WebGL is GPU-backed, off the main thread. Creating a
// WebGL context on a software rasterizer can block for seconds, so
// useSceneGate asks this worker instead of probing on the main thread.
try {
  var gl =
    new OffscreenCanvas(1, 1).getContext("webgl2") ||
    new OffscreenCanvas(1, 1).getContext("webgl");
  var renderer = "";
  if (gl) {
    var info = gl.getExtension("WEBGL_debug_renderer_info");
    renderer = info ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)) : "";
    var lose = gl.getExtension("WEBGL_lose_context");
    if (lose) lose.loseContext();
  }
  postMessage({ gl: !!gl, renderer: renderer });
} catch (e) {
  postMessage({ gl: false, renderer: "" });
}
