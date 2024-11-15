import React from 'react';
import Phone from './Phone';
import Name from './Name';

const Contact = () => {
  return <div>
    <h3>联系人组件</h3>
    {/* 联系人组件依赖的手机号以及姓名组件 */}
    <Phone></Phone>
    <Name></Name>
  </div>;
};

export default Contact;