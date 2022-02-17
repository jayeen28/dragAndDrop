/**
 * This class is used for manage a drag and drop list.
 */
class ManageList {
    constructor() {
        this.firstElem = undefined;//the value from where drag started.
        this.secondElem = undefined;//the value where the drag end.
        this.values = ['Hello', 'Mello', 'Tello', 'Sello', 'Tullo'];//the values which is rendered on the ui.
        this.listParent = document.getElementById('myList');
    }
    renderElems() {//it will render  values
        this.values.forEach(value => {
            let listItem = document.createElement('li');
            listItem.setAttribute('draggable', true);
            listItem.setAttribute('ondragend', 'onDragEnd(event)');
            listItem.setAttribute('ondragover', 'onDragOver(event)')
            listItem.innerText = value;
            this.listParent.appendChild(listItem)
        })
    }
    removeElems() {//it will remove all li tag from the list
        this.listParent.innerHTML = ""
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
    set modifyValues({ dragStartedIndex, dragEndIndex }) {
        this.removeElems();
        // [this.values[dragEndIndex], this.values[dragStartedIndex]] = [this.values[dragStartedIndex], this.values[dragEndIndex]];
        this.values.splice(dragStartedIndex, 1);
        this.values.splice(dragEndIndex, 0, this.firstElem);
        this.renderElems();
    }

}

let manageList = new ManageList();

manageList.renderElems();

const onDragOver = (e) => {
    manageList.elemsVal = { key: 'secondElem', value: e.target.innerText };
}

const onDragEnd = (e) => {
    manageList.elemsVal = { key: 'firstElem', value: e.target.innerText };
    manageList.modifyValues = manageList.indexes
}
