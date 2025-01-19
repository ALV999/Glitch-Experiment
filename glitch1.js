
//audio
await loadScript("https://unpkg.com/tone")
const player = new Tone.Player("https://drive.google.com/drive/u/0/folders/1xYbmM5SOTCvJNXprEzPsn9_w_39w9UR0").toDestination();
player.autostart = true;
player.loop = true;
player.loopStart = 0;

//hydra section
window.onload = () => {
    const canvas = document.getElementById("myCanvas");

    canvas.width = 1024;
    canvas.height = 1024;

    var  hydra = new Hydra({
        canvas,
        detectAudio: true,
        enableStreamCapture: false,

    });

    s0.initCam(); // Webcam input
    src(s0)
        .saturate(2)
        
        .contrast(1.3)
        .layer(
            src(o0)
               
                .mask(
                    shape(4, 2)
                        .scale(0.5, 0.5)
                        .scrollX(0.25)
                        .pixelate(64,64)
                        .modulatePixelate(
                            noise(3,3)
                            .thresh(-1,0.5)
                            .pixelate(64,64),1024,64
                           )
                         
                )
                .scrollX(0.001) //scroll mask output       
        )
        
        .modulate(o0, 0.001)
        .out(o0);
};
