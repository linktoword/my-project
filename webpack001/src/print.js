import { set } from "lodash";

export default function printMe() {
  function render() {
    console.log("渲染视图")
  }

  // let data = {
  //   name: "dsadsa",
  //   location: {
  //     x: 1,
  //     y: 99
  //   }
  // };
  // function oberve(obj) {
  //   if(!obj || typeof obj !== "object") {
  //     return;
  //   }

  //   Object.keys(obj).forEach((key) => {
  //     defineReactive(obj, key, obj[key]);
  //   })

  //   function defineReactive(obj, key, value) {
  //     oberve(value);
  //     Object.defineProperty(obj, key, {
  //       enumerable: true,
  //       configurable: true,
  //       get: function() {
  //         console.log("get", value)
  //         return value;
  //       },
  //       set: function (newVal) {
  //         oberve(newVal);
  //         if(newVal !== value) {
  //           console.log('set', newVal);
  //           render();
  //           value = newVal;
  //         }
  //       }
  //     })
  //   }
  // }
  // oberve(data);
  // data.location = {
  //   x: 1000,
  //   y: 1000
  // }

  // data.name = "dsadsad";

  // proxy
  let obj = {
    name: '前端工匠',
    age: { age: 100 },
    arr: [1, 2, 3]
  };
  let handler = {
    get(target, key) {
      debugger
      if(typeof target[key] == 'object' && target[key] !== null) {
        return new Proxy(target[key], handler);
      }
      return Reflect.get(target, key);
    },
    set(target, key, value) {
      debugger
      if (key === 'length') return true;
      render();
      return Reflect.set(target, key, value);
    }
  };

  let proxy = new Proxy(obj, handler)
  debugger
  proxy.age.name = '浪里行舟' // 支持新增属性
  console.log(proxy.age.name) // 模拟视图的更新 浪里行舟
  proxy.arr[0] = '浪里行舟' //支持数组的内容发生变化
  console.log(proxy.arr) // 模拟视图的更新 ['浪里行舟', 2, 3 ]
  proxy.arr.length-- // 无效
}
