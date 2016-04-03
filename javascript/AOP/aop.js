/**
 * Created by Administrator on 2016/4/3 0003.
 */
/*AOP javascript面向切面编程*/
/*AOP 面向切面编程，与OOP不同的是它所针对的是一个阶段或是一个步骤，将一些公共处理从业务逻辑中
 * 脱离出来，实现代码的低耦合*/

/*代码实现*/

(function () {
    Function.prototype.before = function (fn, scope) {
        var _self = this, param =  Array.prototype.slice.call(arguments, 2, arguments.length);
        scope = scope || _self;
        var result = fn.apply(scope, param);
        if(result != false){
           return  _self.apply(_self, param);
        }
    };

    Function.prototype.after = function (fn, scope) {
        var _self = this, param =  Array.prototype.slice.call(arguments, 2, arguments.length);
        scope = scope || _self;
        var result = _self.apply(_self, param);
        if(result != false){
            var res = fn.apply(scope, param);
            if(res != false){
                return result;
            }
        }
    };

    Function.prototype.around = function (fn1, fn2, scope) {
        var _self = this, param =  Array.prototype.slice.call(arguments, 2, arguments.length);
        scope = scope || _self;

        var result = fn1.apply(scope, param);
        if(result != false){
            var result = _self.apply(_self, param);
            if(result != false){
                var res = fn2.apply(scope, param);
                if(res != false){
                    return result;
                }
            }
        }
    }
})();
