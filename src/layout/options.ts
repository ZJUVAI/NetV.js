import Node from "src/elements/node";
import { Position } from "src/interfaces";
import BaseLayout from "./base";

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
export interface DagreLayoutOptions {
    type: "dagre";
    rankdir?: "TB" | "BT" | "LR" | "RL";
    align?: "UL" | "UR" | "DL" | "DR";
    nodeSize?: number | number[] | undefined;
    nodesep?: number;
    ranksep?: number;
    nodesepFunc?: ((d?: any) => number) | undefined;
    ranksepFunc?: ((d?: any) => number) | undefined;
    controlPoints?: boolean;
    workerEnabled?: boolean;
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
export interface ForceLayoutOptions {
    type: "force";
    center?: Position;
    linkDistance?: number | ((d?: any) => number) | undefined;
    edgeStrength?: number | ((d?: any) => number) | undefined;
    nodeStrength?: number | ((d?: any) => number) | undefined;
    preventOverlap?: boolean;
    collideStrength?: number;
    nodeSize?: number | number[] | ((d?: any) => number) | undefined;
    nodeSpacing?: number | number[] | ((d?: any) => number) | undefined;
    alpha?: number;
    alphaDecay?: number;
    alphaMin?: number;
    clustering?: boolean;
    clusterNodeStrength?: number;
    clusterEdgeStrength?: number;
    clusterEdgeDistance?: number;
    clusterNodeSize?: number;
    clusterFociStrength?: number;
    forceSimulation?: any;
    tick?: () => void;
    onLayoutEnd?: () => void;
    workerEnabled?: boolean;
}
export interface MDSLayoutOptions {
    type: "mds";
    center?: Position;
    linkDistance?: number;
    workerEnabled?: boolean;
    onLayoutEnd?: () => void;
}
export interface BaseLayoutOptions {
    type: "base"
}
export interface RadialLayoutOptions{
    type: "radial";
    center?: Position;
    width?: number;
    height?: number;
    linkDistance?: number;
    maxIteration?: number;
    focusNode?: string | Node | null;
    unitRadius?: number | null;
    preventOverlap?: boolean;
    nodeSize?: number | number[] | undefined;
    nodeSpacing?: number | Function | undefined;
    maxPreventOverlapIteration?: number;
    strictRadial?: boolean;
    sortBy?: string | undefined;
    sortStrength?: number;
    workerEnabled?: boolean;
    onLayoutEnd?: () => void;
}
export declare namespace ILayout {
    type LayoutTypes = "circular" | "concentric" | "dagre" | "random" | "grid" | "fruchterman" | "force" | "gforce" | "forceAtlas2" | "mds" | "base" | "radial";
    type LayoutOptions = CircularLayoutOptions | ConcentricLayoutOptions | DagreLayoutOptions | RandomLayoutOptions | GridLayoutOptions | FruchtermanLayoutOptions | ForceLayoutOptions | GForceLayoutOptions | ForceAtlas2LayoutOptions | MDSLayoutOptions | BaseLayoutOptions | RadialLayoutOptions;
}