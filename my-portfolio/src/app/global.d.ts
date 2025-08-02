interface VantaEffect {
  destroy: () => void;
  // Add more methods if needed later
}

declare module "vanta/dist/vanta.birds.min" {
  const effect: (options: {
    el: HTMLElement;
    THREE: any;
    [key: string]: any;
  }) => VantaEffect;
  export default effect;
}

declare module "vanta/src/vanta.birds" {
  const effect: (options: {
    el: HTMLElement;
    THREE: any;
    [key: string]: any;
  }) => VantaEffect;
  export default effect;
}

declare module "vanta/src/vanta.fog" {
  const effect: (options: {
    el: HTMLElement;
    THREE: any;
    [key: string]: any;
  }) => VantaEffect;
  export default effect;
}