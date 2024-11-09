export interface ChildInfo {
  position: FlowOptions;
  dots?: DOMRect[];
  el?: HTMLElement;
  elRect: DOMRect;
}

export class FlowOptions {
  x: number;
  y: number;
  id: string;
  deps: string[];
  constructor(options: FlowOptions) {
    this.x = options.x;
    this.y = options.y;
    this.id = options.id;
    this.deps = options.deps;
  }
}

export interface DotOptions extends FlowOptions {
  /**
   * The index of the dot
   * top = 0
   * right = 1
   * bottom = 2
   * left = 3
   */
  dotIndex: number;
}

export type FlowDirection = 'horizontal' | 'vertical';

export type ArrowPathFn = (
  start: DotOptions,
  end: DotOptions,
  arrowSize: number,
  strokeWidth: number,
) => string;
