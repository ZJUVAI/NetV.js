import RandomLayout  from "./random";
import GridLayout from "./grid";
import CircularLayout from "./circular";
import ConcentricLayout from "./concentric";
import FruchtermanLayout from "./fruchterman";
import GForceLayout from "./gForce";
import ForceAtlas2Layout from "./forceAtlas2";
import DagreLayout from "./dagre";
import MDSLayout from "./mds";
import RadialLayout from "./radial";
import  Layout, {Layouts}  from "./layout";
import BaseLayout from "./base";
import ForceLayout from "./force";
Layouts["grid"] = GridLayout
Layouts["random"] = RandomLayout
Layouts["circular"] = CircularLayout
Layouts["concentric"] = ConcentricLayout
Layouts["fruchterman"] = FruchtermanLayout
Layouts["gforce"] = GForceLayout
Layouts["forceAtlas2"] = ForceAtlas2Layout
Layouts["dagre"] = DagreLayout
Layouts["mds"] = MDSLayout
Layouts["radial"] = RadialLayout
Layouts["base"] = BaseLayout
Layouts["force"] = ForceLayout
export { Layout };