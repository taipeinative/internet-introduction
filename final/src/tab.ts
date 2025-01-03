import { existIndex } from "./utils";

class TabController {
    // Properties
    protected target: HTMLElement = new HTMLElement();
    protected tabList: Array<Tab> = [];
    
    // Constructor
    constructor(container: HTMLElement) {
        if (container instanceof HTMLElement) {
            this.target = container;
        }
    }

    // Methods
    public appendTab(instance: Tab, index?: number): void {
        let tab_index = this.tabList.length;
        if (existIndex(this.tabList, index)) {
            tab_index = Number(index);
        }
        this.tabList.splice(tab_index, 0, instance);
    }
    public getTabs(): Array<Tab> {
        return this.tabList;
    }
    public removeTab(index?: number): void {
        let tab_index = this.tabList.length - 1;
        if (existIndex(this.tabList, index)) {
            tab_index = Number(index);
        }
        if (this.tabList.length > 0) {
            this.tabList.splice(tab_index);
        }
    }
    public setTab(index: number): void {
        
    }
}

class Tab {

}