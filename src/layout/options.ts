import Node from "src/elements/node";
import { Position } from "src/interfaces";

export interface CircularLayoutOptions {
    type: "circular";
    center?: Position;
    width?: number;
    height?: number;
    radius?: number | null;
    startRadius?: number | null;
    endRadius?: number | null;
    clockwise?: boolean;
    divisions?: number;
    ordering?: "topology" | "topology-directed" | "degree" | null;
    angleRatio?: number;
    workerEnabled?: boolean;
    startAngle?: number;
    endAngle?: number;
    onLayoutEnd?: () => void;
}
export interface ConcentricLayoutOptions {
    type: "concentric";
    center?: Position;
    preventOverlap?: boolean;
    nodeSize?: number | Position;
    minNodeSpacing?: number;
    sweep?: number;
    equidistant?: boolean;
    startAngle?: number;
    clockwise?: boolean;
    maxLevelDiff?: number;
    sortBy?: string;
    workerEnabled?: boolean;
    width?: number;
    height?: number;
    onLayoutEnd?: () => void;
}
export interface FruchtermanLayoutOptions {
    type: "fruchterman";
    center?: Position;
    maxIteration?: number;
    width?: number;
    height?: number;
    gravity?: number;
    speed?: number;
    clustering?: boolean;
    clusterGravity?: number;
    workerEnabled?: boolean;
    gpuEnabled?: boolean;
    onLayoutEnd?: () => void;
}
export interface RandomLayoutOptions {
    type: "random";
    center?: Position;
    width?: number;
    height?: number;
    workerEnabled?: boolean;
    onLayoutEnd?: () => void;
}
export interface GridLayoutOptions {
    type: "grid";
    width?: number;
    height?: number;
    begin?: Position;
    preventOverlap?: boolean;
    nodeSize?: number | number[];
    preventOverlapPadding?: number;
    condense?: boolean;
    rows?: number;
    cols?: number;
    sortBy?: string;
    workerEnabled?: boolean;
    position?: ((node: Node) => {
        row?: number;
        col?: number;
    }) | undefined;
    onLayoutEnd?: () => void;
}
export interface GForceLayoutOptions {
    type?: "gForce";
    center?: Position;
    width?: number;
    height?: number;
    linkDistance?: number | ((d?: any) => number) | undefined;
    nodeStrength?: number | ((d?: any) => number) | undefined;
    edgeStrength?: number | ((d?: any) => number) | undefined;
    preventOverlap?: boolean;
    nodeSize?: number | number[] | ((d?: any) => number) | undefined;
    nodeSpacing?: number | number[] | ((d?: any) => number) | undefined;
    minMovement?: number;
    maxIteration?: number;
    damping?: number;
    maxSpeed?: number;
    coulombDisScale?: number;
    getMass?: ((d?: any) => number) | undefined;
    getCenter?: ((d?: any, degree?: number) => number[]) | undefined;
    gravity?: number;
    tick?: () => void;
    onLayoutEnd?: () => void;
    workerEnabled?: boolean;
    gpuEnabled?: boolean;
}
export interface ForceAtlas2LayoutOptions {
    type: "forceAtlas2";
    center?: Position;
    width?: number;
    height?: number;
    workerEnabled?: boolean;
    onLayoutEnd?: () => void;
    tick?: () => void;
    kr?: number;
    kg?: number;
    ks?: number;
    ksmax?: number;
    tao?: number;
    maxIteration?: number;
    mode?: 'normal' | 'linlog';
    prevOverlapping?: boolean;
    dissuadeHubs?: boolean;
    barnesHut?: boolean;
    prune?: boolean;
}
export interface NoneLayout {
    type: "none"
}
export declare namespace ILayout {
    type LayoutTypes = "circular" | "concentric" | "random" | "grid" | "fruchterman" | "gforce" | "forceAtlas2" | "none";
    type LayoutOptions = CircularLayoutOptions | ConcentricLayoutOptions | RandomLayoutOptions | GridLayoutOptions | FruchtermanLayoutOptions | GForceLayoutOptions | ForceAtlas2LayoutOptions | NoneLayout;
}