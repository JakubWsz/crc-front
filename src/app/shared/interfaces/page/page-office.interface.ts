import {PageInterface} from "./page.interface";
import {OfficeInterface} from "../office.interface";

export interface PageOfficeInterface extends PageInterface {
  content: OfficeInterface[]
}
