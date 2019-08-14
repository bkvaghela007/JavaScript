export class eventObseraver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn){
        if (this.observers.indexOf(fn) === -1) {
            this.observers.push(fn);
        }
    }

    unsubscribe(fn){
        var listeners = this.observers;
        if (!listeners) return;

        var index = listeners.indexOf(fn);

        if (index > -1) {
            listeners.splice(index, 1);
        }  
    }

    broadcast(data){
        let listeners = this.observers;

        for (let i = 0, i1 = listeners.length; i < i1; i++) {
            listeners[i](data);
        }
    }
}
