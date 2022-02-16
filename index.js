/**
 * This class is used for manage a drag and drop list.
 */
class ManageList {
    constructor() {
        this.firstElem = undefined;//the value from where drag started.
        this.secondElem = undefined;//the value where the drag end.
        this.values = ['Hello', 'Mello', 'Tello', 'Sello', 'Tullo']
    }
    get elems() {//use to check the values
        return { firstElem: this.firstElem, secondElem: this.secondElem }
    }
    set elemsVal(elemData) {//use to set elems to the constructor.
        this[elemData['key']] = elemData['value'];
    }
    get indexes() {
        if (this.firstElem && this.secondElem) {//use to get the indexes
            return { dragStartedIndex: this.values.indexOf(this.firstElem), dragEndIndex: this.values.indexOf(this.secondElem) }
        }
    }

}

let manageList = new ManageList();

const onDragOver = (e) => {
    manageList.elemsVal = { key: 'secondElem', value: e.target.innerText };
}

const onDragEnd = (e) => {
    manageList.elemsVal = { key: 'firstElem', value: e.target.innerText };
    console.log(manageList.indexes)
}
