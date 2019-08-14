var dom = (function(){
    let _counter = 0;
    let instance;

    function generateId(){
        return "customId" + _counter++;
    }

    function create(tagName,id){
        let el = document.createElement(tagName);
        el.id = id || generateId();
        return el;
    }

    function createInstance(){
        return {
            generateId:generateId,
            create:create
        }
    }

    return {
        getInstance : function(){
            return instance || (instance = createInstance());
        }
    }

})();