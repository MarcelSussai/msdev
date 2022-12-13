import { listOfColors } from "./creatingColorsScheme"


const pictonBlue    = listOfColors('#3C90E5', 9, 9)
const celery        = listOfColors('#3CE579', 9, 9)
const riverBed      = listOfColors('#758CA0', 9, 9)
const paleGoldenRod = listOfColors('#faf0be', 9, 9)
const yellow        = listOfColors('#F9F871', 9, 9)

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
  pictonBlue:     makingTones(pictonBlue),
  celery:         makingTones(celery),
  riverBed:       makingTones(riverBed),
  paleGoldenRod:  makingTones(paleGoldenRod),
  yellow:         makingTones(yellow),
}

export default colors