// 대량의 데이터가 담겨 있을지도 모를 csv 파일을 한꺼번에 읽는 것은 매우 바람직 하지 못함
// 파일을 한 줄씩 읽는 방식으로 생성기를 구현
// 1,024Byte의 Buffer 타입 객체를 생성해 파일을 1,024Byte씩 읽으면서 한 줄씩 찾음
// 찾은 줄의 데이터를 yield 문으로 발생

import * as fs from 'fs'

export function * readFileGenerator(filename: string): any {
    let fd: any

    try {
        fd = fs.openSync(filename, 'rs')
        const stats = fs.fstatSync(fd)
        const bufferSize = Math.min(stats.size, 1024)
        const buffer = Buffer.alloc(bufferSize + 4)
        let filepos = 0, line

        while(filepos > -1) {
            [line, filepos] = readLine(fd, buffer, bufferSize, filepos)
            if(filepos > -1) {
                yield line
            }
        }
        yield buffer.toString()
    } catch (e) {
        console.error('readLine:', e.message)
    } finally {
        fd && fs.closeSync(fd)
    }
}

function readLine(fd: any, buffer: Buffer, bufferSize: number, position: number): [string, number] {
    let line = '', readSize
    const crSize = '\n'.length

    while(true) {
        readSize = fs.readSync(fd, buffer, 0, bufferSize, position)
        if(readSize > 0) {
            const temp = buffer.toString('utf8', 0, readSize)
            const index = temp.indexOf('\n')
            if(index > -1) {
                line += temp.substr(0, index)
                position += index + crSize
                break
            } else {
                line += temp
                position += temp.length
            }
        } else {
            position = -1
            break
        }
    }
    return [line.trim(), position]
}