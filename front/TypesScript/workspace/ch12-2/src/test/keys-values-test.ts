// CSV 파일 생성을 위해 객체의 속성과 값을 분리
import {IFake, makeFakeData} from '../fake/makeFakeData'

const data: IFake = makeFakeData()
const keys = Object.keys(data)
console.log('keys:', keys)
const values = Object.values(data)
console.log('value:', values)