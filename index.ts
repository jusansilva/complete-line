export default function complete(start  : string, char  : string, str  : string, strLength : number){
    if (!str.split(' ').includes(start)) {
        return new Error('start not found')
    }
    return str.replace(start,start+char.repeat(strLength))
}
