import { listOfColors } from "./creatingColorsScheme"


const pictonBlue    = listOfColors('#3C90E5', 6, 7)
const celery        = listOfColors('#9ED264', 6, 7)
const riverBed      = listOfColors('#3F4756', 6, 7)
const paleGoldenRod = listOfColors('#EEE8A9', 6, 7)
const eucalyptus    = listOfColors('#3CE591', 6, 7)
const majorelleBlue = listOfColors('#4B47E6', 6, 7)
const fireOpal      = listOfColors('#E65C53', 6, 7)
const richLilac     = listOfColors('#C164D1', 6, 7)
const ripeMango     = listOfColors('#FFC71D', 6, 7)

const makingTones = (color: any) => {
  return {
    x050: color.lightColors[6],
    x100: color.lightColors[5],
    x150: color.lightColors[4],
    x200: color.lightColors[3],
    x250: color.lightColors[2],
    x300: color.lightColors[1],
    x400: color.lightColors[0],
    x500: color.mainColor,
    x550: color.darkColors[0],
    x600: color.darkColors[1],
    x650: color.darkColors[2],
    x700: color.darkColors[3],
    x800: color.darkColors[4],
    x900: color.darkColors[5],
  }
}

const colors = {
  pictonBlue:     makingTones(pictonBlue),
  celery:         makingTones(celery),
  riverBed:       makingTones(riverBed),
  paleGoldenRod:  makingTones(paleGoldenRod),
  eucalyptus:     makingTones(eucalyptus),
  majorelleBlue:  makingTones(majorelleBlue),
  fireOpal:       makingTones(fireOpal),
  richLilac:      makingTones(richLilac),
  ripeMango:      makingTones(ripeMango),
}

export default colors