



module.exports = function(injectedStore){

    let store = injectedStore;

    if(!store){
        store = require('../../../store/mysql');
    }
    function list(){
        return store.list('user');
    }
   return {
        list
    }
}
