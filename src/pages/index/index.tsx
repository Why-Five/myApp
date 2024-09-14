import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  let a ="第一个变量"
  const arr =['abc','hhh','xxxxxx']
  const obj ={
    name:'yyy',
    age:18
  } 
  let istrue= true;
  let isNull = null;
  function hh(){
    return "这是返回值"
  }
  return (
    <>
    {/*变量*/}
    <View>{a}</View>
    {/*数组*/}
    <View>{arr}</View>
    {/*对象*/}
    <View>{obj.name}</View>
    <View>{obj.age}</View>
    <View>{JSON.stringify(obj)}</View>
    {/*运算表达式*/}
    {isNull}
    {/*时间戳*/}
    <View>{ new Date().getTime()}</View>
    {/*运算表达式*/}
    <View>{15*5}</View>
    {/*三元表达式  条件 ？成立：不成立 */}
    <View>{istrue ? '我是真的':'我是假的'}</View>
    {/*函数*/}
    <View>{hh()}</View>
    </>
  )
}
