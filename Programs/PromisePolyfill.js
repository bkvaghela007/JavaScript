const CustomPromiseState = {
   PENDING : "PENDING",
   REJECTED: "REJECTED",
   RESOLVED: "RESOLVED"  
};

class CustomPromise{
    constructor(executor){
        if(typeof executor != "function") throw new TypeError(`Promise resolver must be a function`);
        this.state = CustomPromiseState.PENDING;
        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
        this.thenFns = [];
        this.catchFn = null;
        this.value = null;
        executor(this.resolve, this.reject);
    }

    resolve(value) {
        if(!this.state === CustomPromiseState.PENDING) return;
        this.state = CustomPromiseState.RESOLVED;
        while(this.thenFns.length){
            const thenFn = this.thenFns.shift();
            this.value = thenFn(this.value || value);
        }
    };

    reject(reason){
        if(this.state === CustomPromiseState.PENDING){
            this.catchFn && this.catchFn(reason);
        }
        this.state = CustomPromiseState.REJECTED;
    }

    then(thenFn){
        this.thenFn.push(thenFn);
        return this;
    }

    catch(catchFn){
        this.catchFn = catchFn;
        return this;
    }
}

/* usage of new promise example 

const getNumser = () => {
   return new CustomPromise((res,rej) => {
      res(console.log("1"));
   });
};

*/
