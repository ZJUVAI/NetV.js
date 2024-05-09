/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description some utility functions
 */
import { NodeLinkData } from '../interfaces';
/**
 * given a graph data with position, return a copy of graph, with position transformed to center of given size
 * @param graph node link graph data
 * @param size graph size (max(width, height))
 * @param centerX x pos of graph center
 * @param centerY y pos of graph center
 */
export declare function transformGraphPosition(graph: NodeLinkData, size: number, centerX: number, centerY: number): NodeLinkData;
/**
 * the function is to override object recursively
 * @param overriddenObject: the Object to be overridden
 * @param overridingObject: the Object to override the overridden Object
 */
export declare function override(overriddenObject: object, overridingObject: object): any;
