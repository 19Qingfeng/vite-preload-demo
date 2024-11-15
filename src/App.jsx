import React, { Suspense } from 'react';

// 联系人组件，使用 React.lazy 进行懒加载
const Contact = React.lazy(() => import('./components/Contact'));

// 这里的手机号组件、姓名组件可以忽略
// 实际上特意这么写是为了利用 dynamicImport 的 splitChunk 特性
// vite 在构建时对于 dynamicImport 的模块是会进行 splitChunk 的
// 自然 Phone、Name 模块在构建时会被拆分为两个 chunk 文件
const Phone = () => import('./components/Phone');
const Name = () => import('./components/Name');
// 防止被 sharking 
console.log(Phone,'Phone')
console.log(Name,'Name')


const App = () => {

  return (
    <div>
      <h1>页面标题</h1>
      {/* 懒加载的联系人组件 */}
       (
        <Suspense fallback={<div>加载中...</div>}>
          <Contact />
        </Suspense>
      )
    </div>
  );
};

export default App;