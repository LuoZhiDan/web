import _ from 'lodash';
import  '../public/css/bootstrap.css';

function component() {
    var element = document.createElement('div');
    element.className = 'container';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);