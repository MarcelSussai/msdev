import { listOfColors } from "./creatingColorsScheme"


const pictonBlue    = listOfColors('#3C90E5', 9, 9)
const celery        = listOfColors('#3ce579', 9, 9)
const riverBed      = listOfColors('#758CA0', 9, 9)
const paleGoldenRod = listOfColors('#EEE8A9', 9, 9)
const cream         = listOfColors('#FFEDCB', 9, 9)
const yellow        = listOfColors('#F8F872', 9, 9)
const wine          = listOfColors('#904B72', 9, 9)
const grape         = listOfColors('#8170BC', 9, 9)
const orange        = listOfColors('#E5913C', 9, 9)
const red           = listOfColors('#E53C3B', 9, 9)
const green         = listOfColors('#009A5E', 9, 9)
const blue          = listOfColors('#3D3CE5', 9, 9)
const greyPurple    = listOfColors('#555480', 9, 9)

const makingTones = (color: any) => {
  return {
    c050: color.lightColors[8],
    c100: color.lightColors[7],
    c150: color.lightColors[6],
    c200: color.lightColors[5],
    c250: color.lightColors[4],
    c300: color.lightColors[3],
    c350: color.lightColors[2],
    c400: color.lightColors[1],
    c450: color.lightColors[0],
    c500: color.mainColor,
    c550: color.darkColors[0],
    c600: color.darkColors[1],
    c650: color.darkColors[2],
    c700: color.darkColors[3],
    c750: color.darkColors[4],
    c800: color.darkColors[5],
    c850: color.darkColors[6],
    c900: color.darkColors[7],
    c950: color.darkColors[8],
  }
}

const colors = {
  white:          '#FFFFFF',
  pictonBlue:     makingTones(pictonBlue),
  celery:         makingTones(celery),
  riverBed:       makingTones(riverBed),
  paleGoldenRod:  makingTones(paleGoldenRod),
  yellow:         makingTones(yellow),
  wine:           makingTones(wine),
  grape:          makingTones(grape),
  orange:         makingTones(orange),
  red:            makingTones(red),
  green:          makingTones(green),
  cream:          makingTones(cream),
  blue:           makingTones(blue),
  greyPurple:     makingTones(greyPurple),
}

export default colors