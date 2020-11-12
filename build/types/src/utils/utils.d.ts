/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description some utility functions
 */
import { NodeLinkData } from 'src/interfaces';
/**
 * given a graph data with position, return a copy of graph, with position transformed to center of given size
 * @param graph node link graph data
 * @param size graph size (max(width, height))
 * @param centerX x pos of graph center
 * @param centerY y pos of graph center
 */
export declare function transformGraphPosition(graph: NodeLinkData, size: number, centerX: number, centerY: number): NodeLinkData;
