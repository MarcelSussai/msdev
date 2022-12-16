import { listOfColors } from "./creatingColorsScheme"


const pictonBlue    = listOfColors('#3C90E5', 9, 9)
const celery        = listOfColors('#3CE579', 9, 9)
const riverBed      = listOfColors('#758CA0', 9, 9)
const paleGoldenRod = listOfColors('#FFDE82', 9, 9)
const cream         = listOfColors('#FFEDCB', 9, 9)
const yellow        = listOfColors('#F9F871', 9, 9)
const wine          = listOfColors('#904B72', 9, 9)
const grape         = listOfColors('#8170BC', 9, 9)
const orange        = listOfColors('#E5913C', 9, 9)
const red           = listOfColors('#E53C3B', 9, 9)
const green         = listOfColors('#00A456', 9, 9)
const blue          = listOfColors('#3257BD', 9, 9)
const greyPurple    = listOfColors('#555480', 9, 9)
const limeGreen     = listOfColors('#83DE30', 9, 9)
const pink          = listOfColors('#D92884', 9, 9)
const cyan          = listOfColors('#50FADF', 9, 9)
const purple        = listOfColors('#A153E6', 9, 9)
const sea           = listOfColors('#007DE0', 9, 9)
const sky           = listOfColors('#00C7FF', 9, 9)
const paleGreen     = listOfColors('#6C9F76', 9, 9)
const paleRed       = listOfColors('#BB767D', 9, 9)
const greenLeaf     = listOfColors('#00755D', 9, 9)

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
  black:          '#000000',
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
  limeGreen:      makingTones(limeGreen),
  pink:           makingTones(pink),
  cyan:           makingTones(cyan),
  purple:         makingTones(purple),
  sea:            makingTones(sea),
  sky:            makingTones(sky),
  paleGreen:      makingTones(paleGreen),
  paleRed:        makingTones(paleRed),
  greenLeaf:      makingTones(greenLeaf),
}

export default colors